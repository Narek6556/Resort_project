import data from '../../data';
import { createStore, combineReducers } from 'redux';
import { filterReducer } from '../filter/reducer';
import { dataReducer } from '../data/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({ 
    data: dataReducer,
    filter: filterReducer
})


export const store = createStore(rootReducer, composeWithDevTools());

// export default function rootReducer(state = initialState, action) { 
//     switch(action.type) { 
//         // case 'ADD_TO_FTR':
//         //     state.featuredRooms.push(action.payload);
//         //     return state
//         default:
//             return state
//     }
    
// }