import {ADD_TO_CART, DELETE_FROM_CART} from './types';

const initialState = { 
    totalPrice: 0,
    addedRooms: []
}


export const cartReducer = (state = initialState, action) => { 

    switch(action.type) { 

        case ADD_TO_CART:
            const added = [...state.addedRooms];
            added.push(action.payload);
            const totalPrice = added.reduce( (acc, current) => acc + current.price, 0);
            
            return { 
                ...state,
                addedRooms: added,
                totalPrice
            }
            
        case DELETE_FROM_CART:
            let newRooms = state.addedRooms.filter(room => action.payload !== room.id);
            let roomToRemove = state.addedRooms.find(room => action.payload === room.id)
            let newTotal = state.totalPrice - roomToRemove.price
            
            return { 
                ...state,
                addedRooms: newRooms,
                totalPrice: newTotal
            }

        default:
            return state;
    }
}