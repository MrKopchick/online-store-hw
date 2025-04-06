const ApiError = require('../utils/ApiError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {User, Basket} = require('../models/models');

const generateTokenJWT = (id, email, role) => {
    jwt.sighn({id: id, email, role}, process.env.JWT_SECRET, {expiresIn: '24h'});
}

class UserController {
    async registration (req, res) {
        const {email, password, role} = req.body;
        if(!email || !password){
            return next(ApiError.badRequest('email or password is not found'));
        }
        const candidate = await User.findOne({where: {email}});
        if(candidate){
            return next(ApiError.badRequest('email is already in use'));
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await User.create({email, password: hashPassword, role});
        const basket = await Basket.create({userId: user.id});
        const token = generateTokenJWT(user.id, user.email, user.role);
        return res.json({token});
    }

    async login (req, res) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user){
            return next(ApiError.badRequest('email is not found')); 
        }
        const comparePassword = await bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.badRequest('password is not correct'));
        }
        const token = generateTokenJWT(user.id, user.email, user.role);
        return res.json({token});
    }
    
    async getMe (req, res) {
        const token = generateTokenJWT(req.user.id, req.user.email, req.user.role); 
        return res.json({token});
    }  
}

module.exports = new UserController();