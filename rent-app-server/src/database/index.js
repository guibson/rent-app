const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Locator = require('../models/Locator')
const Apartament = require('../models/Apartament')

const connection = new Sequelize(dbConfig);

Locator.init(connection)
Apartament.init(connection)

Locator.associate(connection.models)

module.exports = connection;