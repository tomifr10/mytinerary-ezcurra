const Router = require('express').Router(); // requiero las rutas, lee los endpoints
const citiesControllers = require('../controllers/cityControllers'); //requiero los controladores
const itinerariesControllers = require('../controllers/itineraryControllers');

const { getCities, getOneCity, addCity, modifyCity, removeCity } = citiesControllers; //desestructuro los controladores
const { getOneItinerary, getItineraries, addItinerary, modifyItinerary, deleteItinerary, findItineraryFromCity } = itinerariesControllers;

Router.route('/cities')
.get(getCities)
.post(addCity)

Router.route('/cities/:id') //los : define que lo que sigue es un parametro
.delete(removeCity)
.put(modifyCity)
.get(getOneCity)


Router.route('/itineraries')
.get(getItineraries)
.post(addItinerary)

Router.route('/itineraries/:id')
.get(getOneItinerary)
.put(modifyItinerary)
.delete(deleteItinerary)

Router.route('/itineraries/cities/:id')
.get(findItineraryFromCity)



module.exports = Router //exporto las rutas para requerirlas en server