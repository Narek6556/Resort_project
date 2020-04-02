
export default function formatData(items){
    
    let tempItems = items.map( item => { 
        
        let id = item.sys.id;

        let images = item.fields.images.map(image => image.fields.file.url);

        let slug = item.fields.slug;

        let room = {...item.fields, images, id, slug};

        return room;
    });
    return tempItems;
}