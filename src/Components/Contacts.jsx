import React, { Component } from 'react';
import Footer from './Footer'
import FollowUs from './Followus'
import Seperator from '../images/Seperator.png'
import Contactnote from './Contactnote';
import Break from  './Break';
class Contacts extends Component {
    state = {  }
    render() { 
        document.title = "Contacts"; 
        return (

            <div>
                <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
                <Break/>

                <Contactnote/>
                <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
                <FollowUs/>
               

                <Footer/>
            </div>
        );
    }
}
 
export default Contacts;