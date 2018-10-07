import React, { Component } from 'react';
import './TabHeader.css';

class TabHeader extends Component {
    render() {
        return (
            <div>
                {/* Logo will come here */}
                <div>HOME</div>
                <div>PRACTICE AREAS</div>
                <div>ABOUT US</div>
                <div>CONTACT US</div>
                <div>FAQ</div>
            </div>
        );
    }
}

export default TabHeader;
