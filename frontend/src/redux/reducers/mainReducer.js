import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import itineraryReducer from './itineraryReducers';
// import authReducer from './authReducer';

const mainReducer = combineReducers({
    cityReducer,
    itineraryReducer
    // authReducer
})
export default mainReducer