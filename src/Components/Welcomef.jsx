import React, { Component } from 'react';
import image2 from '../images/welcome.png'
class Welcomef extends Component {
    state = {  }
    render() { 
        return (
        <div className="all">
            <div className="all-1">
            </div>
            <img src = {image2} alt="logo" width = "10%" className="image2"/>

        <div className="all-2">
                <p>   
                <a href = "google.com">Click here</a>  for more info about this restaurant
Aenean nonummy hendrerit mau rellus porta. Fusce suscipit varius m sociis natoque penaibet magni parturient montes nasetur ridiculumula d.. 
                <div>

<button name="submit" className="action_btn1" value="MORE" onclick={"alert('MESSAGE SENT');"}>MORE</button>
                </div>
                </p>
        </div>
            <ul className="list">
              <li><a href="#">Unlimited consultations and/or planning</a></li>
	          <li><a href="#">Expert advice on traditions, customs, aetiquette</a></li>
	          <li><a href="#">Determine and stay within budget</a></li>
	          <li><a href="#">Choosing the right Wedding Venue</a></li>
	          <li><a href="#">Provide preferred vendor's list</a></li>
	          <li><a href="#">Assist with wedding scheme and design</a></li>
            </ul>
            </div>
        
        );
    }
}
 
export default Welcomef;