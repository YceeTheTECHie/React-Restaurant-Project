import React from 'react';
import image from "../images/logo1.png"
import {Link} from 'react-router-dom'
import Main from './Main'
class Navbar1  extends  React.Component {
    render() { 
        return (
<header>
<div class="zerogrid">
    <div class="col-full">
	<div class="wrap-col">
    <h1><img src = {image} alt="logo" width = "60%" className="trueimage"/> </h1>
    
         <div class="menu_block">
           <nav>
            <ul class="sf-menu">
                   <li className="current1"><Link to ="/home">Home</Link></li>
                   <li className="with_ul1"><Link to ="/about">About Us</Link></li>
				   	<ul>
                         <li><a href="#"> cuisine</a></li>
                         <li><a href="#">Good rest</a></li>
                         <li><a href="#">Services</a></li>
                     </ul>
	
                   <li><a href="index-2.html">Menu</a></li>
                   <li><a href="index-3.html">Portfolio</a></li>
                   <li><a href="index-4.html">News </a></li>
                   <li><a href="index-5.html">Contacts</a></li>
                 </ul>
           </nav>
           <div class="clear"></div>
           </div>
           <div class="clear"></div>
		</div>
      </div>
    </div>
</header>
        );
    }
}
 
export default Navbar1;