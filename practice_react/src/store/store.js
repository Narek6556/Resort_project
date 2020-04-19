
import { createStore, combineReducers } from 'redux';
import { filterReducer } from './filter/reducer';
import { dataReducer } from './data/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './cart/reducer';


const rootReducer = combineReducers({ 
    data: dataReducer,
    filter: filterReducer,
    cart: cartReducer
})


export const store = createStore(rootReducer, composeWithDevTools());

