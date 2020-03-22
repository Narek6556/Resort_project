import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';
import { connect } from 'react-redux';

function RoomContainer({...props}) {

    const {loading, allRooms, sortedRooms} = props;

    if(loading) { 
        return <Loading />
    }

    return (
        <div>
            Hello from Room Container
            <RoomFilter rooms = {allRooms}/>
            <RoomList rooms = {sortedRooms}/>
            
        </div>
    )
}



function mapStateToProps(state) { 
    return { 
        allRooms: state.allRooms,
        loading: state.loading,
        sortedRooms: state.sortedRooms
      }
}

export default connect(mapStateToProps)(RoomContainer);

