import React, { Component } from 'react';
import Navbar  from './Navbar';
import Followus from './Followus'

import Bestchefs from './Bestchefs'
import Break from  './Break';
import Note from './Note'
import Footer from './Footer'
import Seperator from '../images/Seperator.png'
class About extends Component {
    state = {  }
    render() { 
        document.title = " About Us"; 
        return (

        <div>
            
            <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
              
            <Break/>
                    
            <Note/>
            <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
            <br></br>
            <br></br>
            <br></br>
            <Bestchefs/>
            <Followus/>
            <Footer/> 
      
           

        </div>

        );
    }
}
    
export default About;