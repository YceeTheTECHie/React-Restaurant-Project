import React, { Component } from 'react';
import Seperator from '../images/Seperator.png'
class  Features extends Component {
    state = {  }
    render() { 
        return (
        <div className="baba">
            <br></br>
            <br></br>
            <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>                                                                                               
            <div className="Features">Features</div>
        </div>

        );
    }
}
 
export default Features;