import React, { Component } from 'react';
import pottage from '../images/pottage.jpg'
import pottage2 from '../images/newpottage2.png'
import moimoi2 from '../images/moimoi2.jpg'
import ewa from '../images/EWA.JPG'
import amala from '../images/amalaimg2.jpg'
import amalaimg from '../images/amalaimg.jpg'

class Bestchoice2 extends Component {
    state = {  }
    render() { 
        return (
            <div className="og">
                    <div className="block">
                        <img src = {pottage2} width="45%" className="pottager"></img>
                        <h5 className="heading">KIM LOREM IPSUM DOAMET
                        <br></br>
                        <p className = "heading1">ORDER NOW</p>
                        </h5>
                    </div>
                    <div className="block">
                        <img src = {moimoi2} width="45%" className="pottager"></img>
                        <h5 className="heading">KIM LOREM IPSUM DOAMET
                        <br></br>
                        <p className = "heading2">ORDER NOW</p>
                        </h5>
                    </div>
                <div className="block">
                    <img src = {amalaimg} width="45%" height = "193px" className="pottager"></img>
                    <h5 className="heading">KIM LOREM IPSUM DOAMET
                    <br></br>
                    <div className="cover">                    
                        <p className = "heading3">ORDER NOW</p>
                
                    </div>

                    </h5>
                </div>  
            </div>
                
        );
    }
}
 
export default Bestchoice2;