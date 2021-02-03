const { Model, DataTypes } = require('sequelize');

class Locator extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      rg: DataTypes.STRING,
      cpf: DataTypes.STRING,
      celular: DataTypes.STRING
    }, {
      sequelize
    })
  }
  
  static associate(models) {
    this.belongsTo(models.Apartament, { foreignKey: 'apartaments_id', as: 'apartament' })
  }
}

module.exports = Locator;