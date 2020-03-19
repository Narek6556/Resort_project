import data from '../../data';


function formatData(items) { 
    let tempItems = items.map( item => { 
        let id = item.sys.id;

        let images = item.fields.images.map(image => image.fields.file.url);

        let room = {...item.fields, images, id};

        return room;
    });
    return tempItems;
}






const initialState = { 
    allRooms: data,
    featuredRooms: formatData(data).filter(room => room.featured === true),
    sortedRooms: [],
    loading: false
}



export default function rootReducer(state = initialState, action) { 
    switch (action.type) { 
        // case 'ADD_TO_FTR':
        //     state.featuredRooms.push(action.payload);
        //     return state
        default:
            return state
    }
    
}