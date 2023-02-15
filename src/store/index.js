import Reducer from './Reducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;