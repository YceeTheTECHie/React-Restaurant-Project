import React, { Component } from 'react';
import FollowUs from './Followus'
import Footer from './Footer'
import Newsnote from './Newsnote'
import Seperator from '../images/Seperator.png'
class News extends Component {
    state = {  }
    render() { 
        document.title = " News"; 
        return (
            <div>
                <img src={Seperator} alt ="social links" height ="10px" className="Sep"></img>
                <Newsnote/>
                <FollowUs/>
                <Footer/>
            </div>
        );
    }
}
 
export default News;