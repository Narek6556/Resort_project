import React from 'react'
import { Link } from 'react-router-dom';
import { MdAddShoppingCart} from "react-icons/md";
import { connect } from 'react-redux'
import { addToCart } from '../store/cart/actions';


class Room extends React.Component{


    handleAddToCart = (room) => { 
        console.log('Hello from here',room)
    }

    render() { 
         const {images, price, slug, name} = this.props.room;
    //  console.log(room)
    

            return (
                <article className='room'>
                    <div className="img-container">
                        <img src={images[0]} alt="single room"/>
                        <div className="price-top">
                            <h6 style = {{color: 'white'}}>{price}$</h6>
                            <p>per night</p>
                        </div>
                        <Link to = {`/rooms/${slug}`} className = 'btn-primary room-link'> 
                            Features
                        </Link> 
                        <Link  className = 'btn-primary room-links' onClick = { () => this.props.addToCart(this.props.room)}> 
                            <MdAddShoppingCart />
                        </Link>
                    </div>
                    <p className = 'room-info'>
                        {name}
                    </p>
                    
                </article>
                // <div>Hello from room</div>
            )
        }
    }
   
function mapDispatchToProps(dispatch) { 
    return { 
        addToCart: (room) => dispatch(addToCart(room))
    }
}



export default connect(null,mapDispatchToProps)(Room);
