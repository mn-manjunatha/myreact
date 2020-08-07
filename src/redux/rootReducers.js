import {combineReducers} from 'redux';
//import cakeReducer from './cake/cakeReducer'
//import iceCreamReducer from './iceCream/iceCreamReducer'
//import userReducer from './user/userReducer'
import groceryReducer from './grocery/groceryReducer';

const rootReducer = combineReducers (
    {
        grocery:groceryReducer,
    }
)

export default rootReducer