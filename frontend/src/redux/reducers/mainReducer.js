import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
// import authReducer from './authReducer';

const mainReducer = combineReducers({
    cityReducer
    // authReducer
})
export default mainReducer