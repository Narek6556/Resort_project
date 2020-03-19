import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Switch,Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import './App.css';
import {connect} from 'react-redux';


class App extends React.Component{

  render() { 
    return (
    <div>
      <Navbar />
      <Switch> 
        <Route path='/' exact component={Home} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/rooms/:slug' exact component={SingleRoom} />
        <Route  exact component={Error} />
      </Switch>
    </div>
    )
  }
  
  
}

function mapStateToProps(state) { 
    return { 
      allRooms: state.allRooms
    }
}

export default connect(mapStateToProps)(App);
