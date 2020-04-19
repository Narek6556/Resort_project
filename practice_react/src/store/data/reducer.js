import formatData from '../../helpers/formatData';
import data from '../../data';
import { ADD_SORTED_ROOMS } from '../data/types';

let rooms = formatData(data);

const initialState = { 
    allRooms: rooms,
    sortedRooms: rooms,
    loading: false
}

export const  dataReducer = (state = initialState, action) => { 
    switch(action.type) { 
        case  ADD_SORTED_ROOMS:
            return { 
                ...state,
                sortedRooms: action.payload
            }
        
        default:
            return state
    }
}

