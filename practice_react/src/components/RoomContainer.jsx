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
            
            <RoomFilter rooms = {allRooms}/>
            <RoomList rooms = {sortedRooms}/>
            
        </div>
    )
}



function mapStateToProps(state) { 
    return { 
        allRooms: state.data.allRooms,
        loading: state.data.loading,
        sortedRooms: state.data.sortedRooms
      }
}

export default connect(mapStateToProps)(RoomContainer);

