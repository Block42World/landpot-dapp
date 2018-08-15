import 'bootstrap/dist/css/bootstrap.min.css'; // TODO use Sass
import 'bootstrap';
import React from 'react'
import ReactDOM from 'react-dom'
import Bid from './Bid'
import MainNavbar from './components/MainNavbar'
// import App from './App'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import './css/main.css'

ReactDOM.render(
  <div>
    <MainNavbar />
    <Bid />
  </div>,
  document.getElementById('root')
);
