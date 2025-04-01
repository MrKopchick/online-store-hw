const ApiError = require('../utils/ApiError');

class UserController {
    async registration (req, res) {

    }

    async login (req, res) {
        
    }
    
    async getMe (req, res) {
        const {id} = req.user;
        if(!id){
            return next(ApiError.badRequest('id is not found'));
        }
        res.json(req.id);
    }
}

module.exports = new UserController();