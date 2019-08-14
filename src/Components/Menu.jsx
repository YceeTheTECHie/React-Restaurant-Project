import React, { Component } from 'react';
import Bestchoice from './Bestchoice'
import Followus from './Followus'
import Flex from './Flex'
import Footer from './Footer'
import Bestchoice2 from './Bestchoice2'

import Seperator from '../images/Seperator.png'
class Menu extends Component {
    state = {  }
    render() { 
        document.title = " Menu"; 
        return (
            <div>
            <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
            <Bestchoice/>
            <Bestchoice2/>
            <Followus/>
            <Flex/>
            <Footer/>  
            </div>
        );
    }
}
 
export default Menu;