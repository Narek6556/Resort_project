import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import getUnique  from '../../src/helpers/getUnique';
import { addSortedRooms } from '../store/data/actions';

class  RoomFilter extends React.Component{
    state = { 
            filteredRooms: [],
            maxPrice: Math.max(...this.props.rooms.map(item => item.price)),
            type: 'all',
            capacity: 1,
            price: Math.max(...this.props.rooms.map(item => item.price)),
            minPrice: 0,
            minSize: 0,
            maxSize: Math.max(...this.props.rooms.map(item => item.size)),
            breakfast: false,
            pets: false   
        }
    constructor(props){ 
        super(props);

        this.handleChange = this.handleChange.bind(this);

    }
    
    
    filterRoom() { 
        let { maxPrice, type, capacity, minPrice, minSize, maxSize, price, breakfast, pets } = this.state;
        let { rooms } = this.props;

        let tempRooms = [...rooms];

        capacity = parseInt(capacity);
        price = parseInt(price);

        if(type !== 'all') { 
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        if (capacity !== 1) { 
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        tempRooms = tempRooms.filter(room => room.price <= price)

        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true)
        }

        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets === true)
        }
        
        this.props.addSortedRooms(tempRooms);
        
    }


    handleChange(event) { 
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ 
            [name]: value
            },
            this.filterRoom
        )
    }

    
    
    
   
    
    
    render() { 
        let { rooms } = this.props;
        let { maxPrice, type, capacity, minPrice, minSize, maxSize, price, breakfast, pets } = this.state;


        let types = getUnique(rooms, 'type');
        types = ['all',...types];
                

        types = types.map((item, index) => { 
            return <option value ={item} key = {index}>{item}</option>
        })
        
        
        let people = getUnique(rooms, 'capacity');
        people = people.map((item, index) => { 
            return <option value ={item} key = {index}>{item}</option>
        })

        return (
        <section className = "filter-container">
            <Title title = 'search rooms'/>
            <form className = 'filter-form'>
                {/*select type */}
                <div className = 'form-group'>
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type"
                        id="type" 
                        value={type} 
                        className = 'form-control' 
                        onChange = {this.handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/* /select type */}
                {/*select guests */}
                <div className = 'form-group'>
                    <label htmlFor="capacity">guests</label>
                    <select 
                        name="capacity"
                        id="capacity" 
                        value={capacity} 
                        className = 'form-control' 
                        onChange = {this.handleChange}
                    >
                        {people}
                    </select>
                </div>
                {/* /select guests */}  
                {/* room price */} 
                <div className = 'form-group'>
                    <label htmlFor="price">room price {price}$</label>
                    <input type="range" 
                           name="price" 
                           min = { minPrice } 
                           max = {maxPrice} 
                           id="price" 
                           value = {price} 
                           onChange = {this.handleChange}
                           className = 'form-control'
                           />
                </div>
                {/* end room price */}  
                {/* size */}
                <div className = 'form-group'>
                    <label htmlFor="size">room size</label>
                        <div className = 'size-inputs'>
                            <input type="number" 
                            name="minSize"  
                            id="size" 
                            value = {minSize} 
                            onChange = {this.handleChange}
                            className = 'size-input'
                            />   
                            <input type="number" 
                            name="maxSize"  
                            id="size" 
                            value = {maxSize} 
                            onChange = {this.handleChange}
                            className = 'size-input'
                            /> 
                        </div>
                </div> 
                {/* end size */} 
                {/* extras */}
                <div className = 'form-group'>
                        <div className = 'single-extra'>
                            <input type = 'checkbox' 
                                   name = 'breakfast' 
                                   id = "breakfast" 
                                   checked = {breakfast}
                                   onChange = {this.handleChange}
                                   />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className = 'single-extra'>
                            <input type = 'checkbox' 
                                   name = 'pets' 
                                   id = "pets" 
                                   checked = {pets}
                                   onChange = {this.handleChange}
                                   />
                            <label htmlFor="pets">pets</label>
                        </div>
                </div>
                {/* end extras */}
            </form>
        </section>
        )
    }
}

function mapStateToProps(state) { 
    return { 
        sortedRooms: state.sortedRooms
    }
}

function mapDispatchToProps(dispatch) { 
    return { 
        addSortedRooms: (filteredRooms) => dispatch(addSortedRooms(filteredRooms)),
        
    }
}







export default connect(mapStateToProps, mapDispatchToProps)(RoomFilter);
