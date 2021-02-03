const express = require('express');
const LocatorsController = require('./controllers/LocatorsController')
const ApartamentsController = require('./controllers/ApartamentsController')

const routes = express.Router();

routes.get('/locators', LocatorsController.index)

routes.post('/apartaments/:apartaments_id/locators', LocatorsController.store)
routes.post('/apartaments', ApartamentsController.store)
routes.get('/apartaments', ApartamentsController.index)


module.exports = routes;