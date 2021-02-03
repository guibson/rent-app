const Apartament = require('../models/Apartament')

module.exports = {
  async index(req, res) {
    const apartaments = await Apartament.findAll()
    return res.json(apartaments)
  },

  async store(req, res) {
    const { type, address } = req.body;
    const apartament = await Apartament.create({ type, address });
    return res.json(apartament)
  }
}