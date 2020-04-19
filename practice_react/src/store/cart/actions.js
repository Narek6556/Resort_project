import {ADD_TO_CART, DELETE_FROM_CART} from './types';

export const addToCart = (room) => ({ 
    type: ADD_TO_CART,
    payload: room
});

export const deleteFromCart = (id) => ({ 
    type: DELETE_FROM_CART,
    payload: id
});

