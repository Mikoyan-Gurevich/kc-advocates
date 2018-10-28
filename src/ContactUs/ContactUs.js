import React, { Component } from 'react';
import './ContactUs.css';

class ConatctUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        this.updateData = this.updateData.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    updateData(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    sendData() {
        console.log(JSON.stringify(this.state));
    }

    render() {
        const { updateData, sendData } = this;
        let { name, email, message } = this.state;
        return (
            <div className='contactUs'>
                <div className='contact'>
                    CONTACT
                </div>
                <div className='bottomSide'>
                    <div className='leftSide'>
                        <div className='getInTouch'>Get in Touch</div>
                        <input placeholder='Your Name' name='name' value={name} onChange={(e) => { updateData(e) }} />
                        <input placeholder='Email' name='email' value={email} onChange={(e) => { updateData(e) }} />
                        <textarea placeholder='Message' name='message' value={message} onChange={(e) => { updateData(e) }} />
                        <button onClick={sendData}>Send</button>
                    </div>
                    <div className='rightSide'>
                        <div className='nameAddress'>
                            <div className='name'>Kunal Chaudhary</div>
                            <div className='address'>
                                <div>A/23 Address new</div>
                                <div>office head</div>
                            </div>
                        </div>
                        <div>93823891811</div>
                        <div>KSA@gmail.com</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConatctUs;
