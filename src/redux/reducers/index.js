import { combineReducers } from 'redux';
import Auth from './auth';
import Alert from './alert';
import Products from './products';
export default combineReducers({
    Auth, 
    Alert,
    Products
    
})