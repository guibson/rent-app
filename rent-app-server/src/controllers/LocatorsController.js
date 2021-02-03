const Locator = require('../models/Locator')

module.exports = {
  async index(req, res) {
    const locators = await Locator.findAll()
    return res.json(locators)
  },

  async store(req, res) {
    const { apartaments_id } = req.params;
    const { name, rg, cpf, celular } = req.body;
    const locators = await Locator.findOne({ where: { apartaments_id } })
    console.log(locators)
    const locator = await Locator.create({ 
      name, 
      rg, 
      cpf, 
      celular, 
      apartaments_id 
    });
    
    return res.json(locator)
  }
}