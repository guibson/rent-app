const { Model, DataTypes } = require('sequelize');

class Apartament extends Model {
  static init(sequelize) {
    super.init({
      type: DataTypes.STRING,
      address: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Apartament;