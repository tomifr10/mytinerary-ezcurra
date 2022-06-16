const Router = require('express').Router(); //lee los endpoints
const citiesControllers = require('../controllers/cityControllers'); //requiero los controladores

const { getCities, getOneCity, addCity, modifyCity, removeCity} = citiesControllers;

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id')
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)

module.exports = Router //exporto las rutas para requerirlas en server