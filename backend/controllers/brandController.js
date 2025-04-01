const {Brand} = require('../models');
const ApiError = require('../utils/ApiError');

class BrandController {
    async create (req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.json(type);
    }

    async getAll (req, res) {
        const brands = await Brand.findAll();
        return res.json(brands);
    }
}

module.exports = new BrandController();