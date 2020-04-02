import formatData from '../../helpers/formatData';
import data from '../../data';
import { ADD_SORTED_ROOMS } from '../data/types';
//import { ADD_GUESTS_SORTED_ROOMS } from '../data/types';

// function formatData(items){
//     let tempItems = items.map( item => { 
//         let id = item.sys.id;

//         let images = item.fields.images.map(image => image.fields.file.url);

//         let slug = item.fields.slug;

//         let room = {...item.fields, images, id, slug};

//         return room;
//     });
//     return tempItems;
// }

let rooms = formatData(data);

const initialState = { 
    allRooms: rooms,
    //featuredRooms: [...formatData(data).filter(room => room.featured === true)],
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

