const uuid = require('uuid');
const PATH = require('path');
const {Device}  = require('../models/Device');
const { badRequest } = require('../utils/ApiError');
const ApiError = requrie('../utils/ApiError');

class DeviceController {
    async create (req, res) {
        try{
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + '.jpg';
            img.mv(__dirname, '..', 'static', fileName);

            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            return res.json(device);
        }catch(e){
            next(ApiError.badRequest(e.message));
        }   
    }

    async getAll (req, res) {
        
    }

    async getOne (req, res) {

    }
}

module.exports = new DeviceController();