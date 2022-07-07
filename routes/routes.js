const Router = require('express').Router(); // requiero las rutas, lee los endpoints
const validator = require('../validator')
const citiesControllers = require('../controllers/cityControllers'); //requiero los controladores
const itinerariesControllers = require('../controllers/itineraryControllers');
const usersControllers = require('../controllers/userControllers');
const activitiesControllers = require('../controllers/activityControllers');
const commentsControllers = require('../controllers/commentControllers')
const passport = require('../config/passport');

const { getCities, getOneCity, addCity, modifyCity, removeCity } = citiesControllers; //desestructuro los controladores
const { getOneItinerary, getItineraries, addItinerary, modifyItinerary, deleteItinerary, findItineraryFromCity, likeDislike } = itinerariesControllers;
const { signUp, signIn, verifyMail, tokenVerification } = usersControllers;
const { getOneActivity, getActivities, addActivity, modifyActivity, deleteActivity, findActivityFromItinerary } = activitiesControllers;
const { addComment, modifyComment, deleteComment } = commentsControllers;

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

Router.route('/activities')
.get(getActivities)
.post(addActivity)

Router.route('/activities/:id')
.get(getOneActivity)
.put(modifyActivity)
.delete(deleteActivity)

Router.route('/activities/itineraries/:id')
.get(findActivityFromItinerary)

Router.route('/auth/signup')
.post(validator, signUp)

Router.route('/auth/signin')
.post(signIn)

Router.route('/verify/:string')
.get(verifyMail)

Router.route('/auth/signInToken')
.get(passport.authenticate('jwt', {session: false}), tokenVerification)

Router.route('/itineraries/likeDislike/:id')
.put(passport.authenticate('jwt', {session:false}), likeDislike)

Router.route('/itineraries/comment')
.post(passport.authenticate('jwt', {session: false}), addComment)
.put(passport.authenticate('jwt', {session: false}), modifyComment)

Router.route('/itineraries/comment/:id')
.post(passport.authenticate('jwt', {session: false}), deleteComment)

module.exports = Router //exporto las rutas para requerirlas en server