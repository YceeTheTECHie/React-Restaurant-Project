import React, { Component } from 'react';
import Welcomef from './Welcomef'
import Features from './Features'
import Followus from './Followus'
import Footer from './Footer'
import Flex from './Flex'
import Seperator from '../images/Seperator.png'
import App from '../App'
import Bestchoice from './Bestchoice'
import pound from '../images/pound.jpg'
class Home  extends Component {
    render() {
        document.title = " Home"; 
        
        return (
            
            <div className="image1">
            <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
            <br></br>
            <br></br>
            <img src = {pound} alt="logo" width = "120%"></img>
            <div>
            <Features/> 
           
          
            <Welcomef/>
            </div>
            <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
            <Bestchoice/>
            <Followus/>
            <Flex/>
            <Footer/>  
        </div>
        );
    }
}
 
export default Home;

