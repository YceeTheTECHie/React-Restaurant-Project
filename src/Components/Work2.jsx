import React from 'react';
import image from "../images/logo1.png"
import image2 from '../images/EWA.JPG'
import pottage from '../images/pottage.jpg'
class Work2 extends React.Component {


    state = {  }
    render() { 
        return (
    <div className="og">
        <div className="block">
            <img src = {pottage} width="45%" className="pottager"></img>
            <h5 className="heading">KIM LOREM IPSUM DOAMET
            <br></br>
            <p className = "heading2">Pottage</p>
            </h5>
        </div>
        <div className="block">
            <img src = {pottage} width="45%" className="pottager"></img>
            <h5 className="heading">KIM LOREM IPSUM DOAMET
            <br></br>
            <p className = "heading2">Pottage</p>
            </h5>
        </div>
        <div className="block">
            <img src = {pottage} width="45%" className="pottager"></img>
            <h5 className="heading">KIM LOREM IPSUM DOAMET
            <br></br>
            <p className = "heading2">Pottage</p>
            </h5>
        </div>
    </div>
    
        );
    }
}
 
export default Work2;



