import React, { Component } from 'react';
import './PracticeAreas.css';

class PracticeAreas extends Component {



    render() {

        return (
            <div className='ContainerPractice'>
                <div className='Practice'>
                    <div className='PracticeAr'>
                        Practice Areas
                    </div>
                    <div className='quote'>A team of skilled criminal lawyers working in Panipat and Sonipat</div>

                </div>
                <div className='AreasMain'>
                    <div className="AreaTabs">
                        <div className="Property">Property</div>
                        <div className="Projects">Projects</div>
                        <div className="Taxation">Taxation</div>
                        <div className="Mergers">Mergers</div>
                    </div>
                    <div className="RightTab">
                        <div className="AreaList"><div className="pracAr">Practice Areas</div>
                            <div>Abcdef</div>
                            <div>324234</div></div>
                        <div className="ContactTab"><div className="contacttabs">Contact</div>
                            <div>ksa@gmail.com</div></div>
                    </div>

                </div>
            </div >
        );
    }
}

export default PracticeAreas;
