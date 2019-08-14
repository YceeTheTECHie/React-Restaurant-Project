import React, { Component } from 'react';
import image from "../images/logo1.png"
class imgcomp extends Component {
    state = {  }
    render() { 
        return (
            <li className="image">
                <img src = {image} alt="logo" width = "100px" />
            </li>
        );
    }
}
 
export default imgcomp;