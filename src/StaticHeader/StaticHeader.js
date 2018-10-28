import React, { Component } from 'react';
import './StaticHeader.css';
import strings from '../utils/strings';

class StaticHeader extends Component {
    render() {
        return (
            <div className='asd'>
                <div className='watermark'>{strings.companyName}</div>
            </div>
        );
    }
}

export default StaticHeader;
