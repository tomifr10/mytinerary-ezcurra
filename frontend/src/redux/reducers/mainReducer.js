import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducers';
import usersReducer from './userReducer';
import activityReducer from './activityReducer';
// import authReducer from './authReducer';

const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer,
    usersReducer,
    activityReducer
    // authReducer
})
export default mainReducer