import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {

    render() {
        return (
            <div className='ContainerAbout'>
                <div className='aboutUs'>
                    <div className='about'>
                        ABOUT US
                    </div>
                    <div className='quote'>A team of skilled criminal lawyers</div>

                </div>
                <div className='divhead'>Our Team</div>
                <div className='OurTeamContainer'>
                    <div className='Member1'>
                        <div className='name'>Kunal Chaudhary</div>
                        <div className='address'>
                            <div>A/23 Address new</div>
                        </div>

                        <div>93823891811</div>
                        <div>KSA@gmail.com</div>
                        <button>Know More</button>
                    </div>
                    <div className='Member1'>
                        <div className='name'>Kunal Chaudhary</div>
                        <div className='address'>
                            <div>A/23 Address new</div>
                        </div>

                        <div>93823891811</div>
                        <div>KSA@gmail.com</div>
                        <button>Know More</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default AboutUs;