import data from '../../data';


function formatData(items) { 
    let tempItems = items.map( item => { 
        let id = item.sys.id;

        let images = item.fields.images.map(image => image.fields.file.url);

        let slug = item.fields.slug;

        let room = {...item.fields, images, id, slug};

        return room;
    });
    return tempItems;
}


const initialState = { 
    allRooms: formatData(data),
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