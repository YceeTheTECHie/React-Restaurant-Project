import React from 'react';
import image from "../images/logo1.png"
import {Link} from 'react-router-dom'

import about from './About'
import menu from './Menu'
class Navbar  extends  React.Component {
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

                    <li className="current">
                        <Link to ="/">Home</Link>
                    </li>
                  
                   <li className="with_ul">
                        <Link to ="/menu">MENU</Link>
                   </li>
                   <li className="with_ul">
                        <Link to ="/reservations">RESERVATIONS</Link>
                        
                   </li>
                   <li className="with_ul">
                        <Link to ="/news">NEWS</Link>
                   </li>
                   <li className="with_ul">
                        <Link to ="/about_us">About Us</Link>
                   </li>
                   <li className="with_ul">
                        <Link to ="/contacts">CONTACTS</Link>
                   </li>
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
 
export default Navbar;