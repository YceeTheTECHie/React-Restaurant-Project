import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import image1 from "./images/amalaimg.jpg"
import Navbar from './Components/Navbar'
import Welcomef from './Components/Welcomef'
import Features from './Components/Features'
import Followus from './Components/Followus'
import Footer from './Components/Footer'
import Reservations from './Components/Reservations'
import Contacts from './Components/Contacts'
import Flex from './Components/Flex'
import Seperator from './images/Seperator.png'
import Bestchoice from './Components/Bestchoice';
import Link from 'react-router-dom';
import About from './Components/About';
import News from './Components/News'
import pound from './images/pound.jpg'

import Menu from './Components/Menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
  <Router>
    <body>
        
        <div className="body">
              <div className="header">
                 <li className="home1">
                     .
                  </li>
              <Navbar />
                <switch>
                    <Route path="/" exact component={Home} />
                    
                    <Route path ="/about_us" component={About}/>
                    
                    <Route path ="/reservations" component={Reservations}/>
                    
                    <Route path ="/contacts" component={Contacts}/>
                    
                    <Route path ="/News" component={News}/>
                    <Route path ="/menu" component={Menu}/>
                </switch>              
          
               
          </div>
          
          
              
          </div>
    </body>    
  </Router>
   );
  }
}

export default App;
