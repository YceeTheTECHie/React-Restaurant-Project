import React, { Component } from 'react';
import Venue from '../images/venue.jpg';
class Contactnote extends Component {
    state = {  }
    render() { 
        return (

        <div className ="note">
                <div className="note1">
                    <h3 className="aboutnote">
                        FIND US
                    </h3>
                    <br></br>
                    
                    
                    <img src={Venue} alt ="social links" height ="auto" className="venue" width = "auto"></img>
                    <p className="abouttext">
                           Gourment Traditional Restaurant,
                           <br></br>
                           <br></br>
                            8901 Marmora Road,
                            <br></br>
                            <br></br>
                            Lagos,Nigeria
                            <br></br>
                            <br></br>

                            Freephone:                                                                                                                                            +234 903 165 9442
                            <br></br>
                            <br></br>
                            Telephone:                                                                                                                                                                                     +234 905 832 7186
                            <br></br>
                            <br></br>
                            FAX:                                                                                                                                                                                       +234 902 321 9764
                            <br></br>
                            <br></br>
                            </p>
 
                </div>
                <div className="note1">
                    <h3 className="aboutnote0">
                        CONTACT US
                    </h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="abouttext0">
                            <form>
                                <input type = "text" placeholder = "Name:" className = "cbox21" required></input> 
                                <br></br>
                                <br></br>
                                <input type = "text" placeholder = "Email:" className = "cbox21" required></input>
                                <br></br>
                                <br></br>
                                <input type = "text" placeholder = "Phone No:" className = "cbox21"></input>                                <br></br>
                                <br></br> 
                                <textarea className ="cbox21">Message required</textarea> 
                            </form>
                        </p>    
                        <div class="buttons">
                            <div class="action_btn">

                                <button name="submit" className="action_btn1" value="SEND" onclick={"alert('MESSAGE SENT');"}>SEND</button>
                                <button name="submit" className="action_btn2"  value="CLEAR" onclick="myFunction2()">CLEAR</button>

                                <p id="saved"></p>

                            </div>

                        </div>
 
                </div>
            </div>

                                                                
        );
    }
}
 
export default Contactnote;



