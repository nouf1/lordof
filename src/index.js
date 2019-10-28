import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const Movie = [
    {
        name: "The Fellowdhip of the Ring",
        hours: "2h ",
        minutes: "58min"
    },
    {
        name: "The Two Towers",
        hours: "2h ",
        minutes: "58min"
    },
    {
        name: "The Return of the King",
        hours: "2h ",
        minutes: "58min"
    }
]




ReactDOM.render(
<App
movies = {Movie}
 />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

