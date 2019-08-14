import React, { Component } from 'react';
import Socials from '../images/socials.png'
import {Link} from 'react-router-dom'
class Follow extends Component {
    state = {  }
    render() { 
        return (
    <div className="stress">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="block">
            <h4 className="FollowUs1">Follow Us</h4>
            <h5><a href = "#">
            <img src={Socials} alt ="social links" height ="30px" className="Socials"></img></a></h5>
            </div>
            <div className="block">
            <h4 className="updates">Email Updates</h4>
            <h6 className="email">
            Join our digital mailing list and get news deals 
            <br></br>
            and be first to know about event.
            </h6>
            <div className = "nav-21">  
            <input type="email" placeholder="yceethetechie@example.com" className="e-mail"></input>
            <input type ="Submit" name = "Subscribe" value ="Subscribe" className="Submit"></input> 
            </div>
            <div/>
        </div>
        <div className="form">
            <ul className="nav-2">
            <li className="current">
                        <Link to ="/">HOME</Link>
                    </li>
                   <li className="with_ul">
                        <Link to ="/about_us">ABOUT US</Link>
                   </li>
                   <li className="with_ul">
                        <Link to ="/menu">MENU</Link>
                   </li>
                   <li className="with_ul">
                        <Link to ="/reservations">RESERVATIONS</Link>
                   </li>
                   <li className="with_ul">
                        <Link to ="/news">NEWS</Link>
                   </li>
                   <li className="with_ul">
                        <Link to ="/contacts">CONTACTS</Link>
                   </li>
            </ul>
            
            
        </div>
            
    </div>
        );
    }
}
 
export default Follow;