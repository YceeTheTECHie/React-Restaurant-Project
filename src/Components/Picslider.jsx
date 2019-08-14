import React, { Component } from 'react';
import slide1 from '../images/pottage.jpg';
import slide2 from '../images/welcome.png'
class Picslider extends Component {
    state = {  }
    render() {
        
        let i = 0;
        let images = [];
        let time = 1000;
        images[0] = '';
        images[1] = '';
        function changeImg() {
            document.slide.src = images[1];
            if(i , images.length - 1){
                i++;
            }
            else {
                i = 0;
            }
            setTimeout("changeImg()", time);
        }

        return (
            <ul className="slides">
                <li className="slide showing"><img src = {slide1} alt="logo" width = "60%"></img></li>
                <li className="slide"><img src = {slide2} alt="logo" width = "60%"></img></li>
                <li className="slide">Slide 3</li>
                <li className="slide">Slide 4</li>
                <li className="slide">Slide 5</li>
            </ul>   
            window.onload = changeImg;
            
        );
    }
}
 
export default Picslider;