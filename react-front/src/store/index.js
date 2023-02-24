import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
    users: userReducer
}) 

export default createStore(rootReducer)