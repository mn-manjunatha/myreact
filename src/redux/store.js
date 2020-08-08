import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducers'
//import logger from 'redux-logger'
import  thunk from 'redux-thunk';

//const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(logger,thunk)) );

const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)) );

export default store