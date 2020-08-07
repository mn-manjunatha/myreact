import {combineReducers} from 'redux';
//import cakeReducer from './cake/cakeReducer'
//import iceCreamReducer from './iceCream/iceCreamReducer'
//import userReducer from './user/userReducer'
import graceryReducer from './gracery/graceryReducer';

const rootReducer = combineReducers (
    {
        gracery:graceryReducer,
    }
)

export default rootReducer