import React, { Component } from 'react';
import chef33 from '../images/chef33.jpg'
import chef2 from '../images/chef2.jpg'
import ewa from '../images/EWA.JPG'
import chef4 from '../images/chef4.jpg'
class Bestchefs extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h3 className ="best1">OUR FEATURED CHEFS
                <br></br>
                <br></br>
                </h3>        
                <div className="og1">
                    <div className="block">
                        <img src = {chef33} width="45%" className="pottager"></img>
                        <h5 className="heading">CHEF MARGARET WILLIAMS
                        <br></br>
                        <p className = "heading1">FULL PROFILE</p>
                        </h5>
                    </div>
                    <div className="block">
                        <img src = {chef2} width="45%" className="pottager"></img>
                        <h5 className="heading">CHEF ANITA DAVID R.
                        <br></br>
                        <p className = "heading2">FULL PROFILE</p>
                        </h5>
                    </div>
                <div className="block">
                    <img src = {chef4} width="45%" height = "160px" className="pottager"></img>
                    <h5 className="heading">CHEF LINDA MICHAEL
                    <br></br>
                    <p className = "heading3">FULL PROFILE</p>
                    </h5>
                </div>  
       
                </div>
                
            </div>

        );
    }
}
 
export default Bestchefs;