import React, { Component } from 'react';
import './ContactCard.css';

class ContactCard extends Component {

    knowMore() {
        console.log('Wanna know more');
    }

    render() {
        return (
            <div>
                <img />
                <div>
                    <div className='name'>Kunal Choudhary</div>
                    <div className='email'>ksa@gmail.com</div>
                    <div className='description'> asd ada da da  da  da d asd asd as das das das dad</div>
                </div>
                <div onClick={this.knowMore}>
                    Know More
                </div>
            </div>
        );
    }
}

export default ContactCard;
