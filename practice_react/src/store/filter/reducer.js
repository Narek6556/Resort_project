import { changeType } from './action'; 
import data from '../../data';
import formatData from '../../helpers/formatData';
import { CHANGE_TYPE } from './type';
import getUnique from '../../helpers/getUnique';


const initialState = { 
    maxPrice: Math.max(...formatData(data).map(item => item.price)),
    type: ['all'],
    capacity: 1,
    price: Math.max(...formatData(data).map(item => item.price)),
    minPrice: 0,
    minSize: 0,
    maxSize: Math.max(...formatData(data).map(item => item.size)),
    breakfast: false,
    pets: false   
}


export const filterReducer = (state = initialState, action) => { 
   
        switch(action.type) { 
            case CHANGE_TYPE:
                state.type = getUnique(state.data.allRooms, 'type');
                state.type = [...state.type];
                return { 
                    ...state,
                }
            default:
                return state
        }
        
    
}