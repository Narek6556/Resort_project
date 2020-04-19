import React, { Component } from 'react';
import Title from '../components/Title'
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Room from './Room';
import formatData from '../helpers/formatData';
import data from '../data';

class FeaturedRooms extends Component {
    

    

    render() {
        
        
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
      allRooms: state.data.allRooms,
      featuredRooms: [...formatData(data).filter(room => room.featured === true)],
      loading: state.data.loading
    }
}





export default connect(mapStateToProps)(FeaturedRooms); 