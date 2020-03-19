import React, { Component } from 'react';
import Title from '../components/Title'
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Room from './Room';



class FeaturedRooms extends Component {
    

    // componentDidMount() { 
    //     // let rooms = this.formatData(this.props.allRooms);
    //     // let featuredRooms = rooms.filter(room => room.featured === true);
    //     // this.props.addFeaturedRooms(featuredRooms);
    // }
    
    
    // formatData(items) { 
    //     let tempItems = items.map( item => { 
    //         let id = item.sys.id;

    //         let images = item.fields.images.map(image => image.fields.file.url);

    //         let room = {...item.fields, images, id};

    //         return room;
    //     });
    //     return tempItems;
    // }

    render() {
        
        //let rooms = this.props.featuredRooms;
        
        // let rooms = [...this.props.featuredRooms];
         let { loading, featuredRooms:rooms } = this.props
        
        rooms = rooms.map( room => { 
            return <Room key={room.id} room={room} />
        });
       

        return (
            <section className="featured-rooms">
                <Title title = 'Featured Rooms' />
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}


function mapStateToProps(state) { 
    return { 
      allRooms: state.allRooms,
      featuredRooms: state.featuredRooms,
      loading: state.loading
    }
}


// function mapDispatchToProps(dispatch) { 
//     return { 
//         addFeaturedRooms: featuredrooms => dispatch({type:'ADD_TO_FTR', payload: featuredrooms})
//     }
// }


export default connect(mapStateToProps)(FeaturedRooms); 