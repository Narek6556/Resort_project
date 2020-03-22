import React from 'react';
import { connect } from 'react-redux';



function RoomFilter({...props}) {

    console.log(props)
    

    return (
        <div>
            Hello from RoomFilter
        </div>
    )
}


function mapStateToProps(state) { 
    return { 
        maxPrice: 0
    }
}


export default connect(mapStateToProps)(RoomFilter);
