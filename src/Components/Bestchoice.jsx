import React, { Component } from 'react';
import pottage from '../images/pottage.jpg'
import pottage2 from '../images/newpottage2.png'
import ewa from '../images/EWA.JPG'
import amala from '../images/amalaimg2.jpg'

class  Bestchoice extends Component {
    state = {  }
    render() { 
        return (    
            <div>
                <h3 className ="best">OUR SPECIALS
                <br></br>
                <br></br>
                </h3>        
                <div className="og">
                    <div className="block">
                        <img src = {pottage} width="45%" className="pottager"></img>
                        <h5 className="heading">KIM LOREM IPSUM DOAMET
                        <br></br>
                        <p className = "heading1">ORDER NOW</p>
                        </h5>
                    </div>
                    <div className="block">
                        <img src = {ewa} width="45%" className="pottager"></img>
                        <h5 className="heading">KIM LOREM IPSUM DOAMET
                        <br></br>
                        <p className = "heading2">ORDER NOW</p>
                        </h5>
                    </div>
                <div className="block">
                    <img src = {amala} width="45%" height = "193px" className="pottager"></img>
                    <h5 className="heading">KIM LOREM IPSUM DOAMET
                    <br></br>
                    <div className="cover">                    
                        <p className = "heading3">ORDER NOW</p>
                
                    </div>

                    </h5>
                </div>  
       
                </div>
                
            </div>

         );
    }
}
 
export default Bestchoice ;
