import React from 'react'
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import {  MdShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Modal  from 'antd/es/modal/Modal';
import Button from 'antd/es/button/button';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { deleteFromCart } from '../store/cart/actions'



class Navbar extends React.Component { 

    state = { 
        isOpen: false,
        isVisible: false,
    }

    handleToggle = () => { 
        this.setState({ 
            isOpen: !this.state.isOpen
        })
    }

    handleToggleCart = () => { 
        this.setState({ 
            isVisible: true
        })
    }


    handleCancel = () => { 
        this.setState({ 
            isVisible: false
        })
    }

    render() { 
        
        return ( 
            <nav className='navbar'>
                <div className='nav-center'> 
                    <div className='nav-header'> 
                        <Link to='/'> 
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}> 
                            <FaAlignRight className='nav-icon' />
                        </button>
                        
                    </div>
                    <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li> 
                            <Link to='/rooms'>Rooms</Link>
                        </li>
                    </ul>

                    <ul className={this.state.isOpen ? 'nav-link show-nav' : 'nav-link'}>
                        <li>
                            <Link>
                                <button type='button' className='nav-butn' onClick = {this.handleToggleCart}>
                                    <MdShoppingCart className='nav-icon' />
                                </button>
                            </Link>   
                        </li>
                    </ul> 
                </div>
                <Modal
                visible={this.state.isVisible}
                title="Shopping Cart"
                onOk={this.handleCancel}
                onCancel={this.handleCancel}
                footer={[
                  <Button key="back" onClick={this.handleCancel}>
                    Return
                  </Button>,
                  <Button key="submit" type="primary" loading = {this.state.loading} onClick={this.handleCancel} style = {{backgroundColor: '#af9a7d'}}>
                    Submit
                  </Button>,
                ]}
              >
                <ul>
                    {
                        this.props.addedRooms.map(room => {
                            return (
                                <li key={room.id}>
                                    {room.name}
                                    <div style = {{paddingRight: '15px'}}>
                                        <Button style = {{backgroundColor: '#af9a7d'}} onClick = {() => this.props.deleteFromCart(room.id)}> 
                                            delete
                                        </Button> 
                                    </div>
                                    
                                    <br /> 
                                </li>
                                )
                            
                        })
                        
                    }
                    <br />
                    <br />
                    <hr />
                    <p>Total Price: {this.props.totalPrice}$</p>
                </ul>
              </Modal>
            </nav>
        );
    }
}

function mapStateToProps(state) { 
    return { 
        addedRooms: state.cart.addedRooms,
        totalPrice: state.cart.totalPrice
    }
}

function mapDispatchToProps(dispatch){ 
    return { 
        deleteFromCart: (id) => dispatch(deleteFromCart(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);