import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducers';
import usersReducer from './userReducer';
// import authReducer from './authReducer';

const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer,
    usersReducer
    // authReducer
})
export default mainReducer