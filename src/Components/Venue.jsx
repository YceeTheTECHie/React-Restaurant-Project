import React, { Component } from 'react';
import venue from '../images/amalaimg2.jpg';
class Venue extends Component {
    state = {  }
    render() { 
        return (
            <img scr = {venue} className="Venue" width ="70%" height = "20px"/>
        );
    }
}
 
export default Venue;