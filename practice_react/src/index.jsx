import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { createStore } from "redux";
import {store} from '../src/store/reducers/store';
import {Provider} from 'react-redux';



const app = (
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

ReactDOM.render(
    app
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

