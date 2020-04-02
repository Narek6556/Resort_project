import { ADD_SORTED_ROOMS } from '../data/types';


export const addSortedRooms = (filtredRooms) => ({ 
    type: ADD_SORTED_ROOMS,
    payload: filtredRooms
});

