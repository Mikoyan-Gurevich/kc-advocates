import React, { Component } from 'react';
import './TabHeader.css';
import imag from '../Logo4.png';
import bgImg from '../123.jpg'


class TabHeader extends Component {
    render() {
        return (
            <div className="TabHead">
                <div className="logo"> 
                  <img src={imag} alt="logo">
                  </img>    
                 </div>
                 <div className="MainPage">
                 
            <nav>
                <ul>
                        <li><div><a href="#">Home</a></div></li>
                        <li><div><a href="#">Practice Areas</a></div></li>
                        <li> <div><a href="#">About Us</a></div></li>
                        <li><div><a href="#">Contact Us</a></div></li>
                        <li> <div><a href="#">FAQ</a></div></li>
                        
                    </ul>
                </nav>
                </div>
            </div>
            
        );
    }
}

export default TabHeader;
