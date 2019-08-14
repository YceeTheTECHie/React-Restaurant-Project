import React, { Component } from 'react';
import Reservenote from './Reservenote'
import Footer from './Footer'
import FollowUs from './Followus'
import Navbar from './Navbar'
import Bookings from './Bookings'
import Seperator from '../images/Seperator.png'
class Reservations extends Component {
    state = {  }
    render() { 
        document.title = "Reservations"; 
        return (
        <div>
            <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
            <Reservenote/>
            <Bookings/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FollowUs/>
            <Footer/>
        </div>
        );
    }
}
 
export default Reservations;

