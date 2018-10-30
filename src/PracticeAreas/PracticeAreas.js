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
                        <div>Property</div>
                        <div>Projects</div>
                        <div>Taxation</div>
                        <div>Mergers</div>
                    </div>
                    <div className="RightTab">
                        <div className="AreaList">Practice Areas</div>
                        <div className="ContactTab">Contact</div>
                    </div>

                </div>
            </div >
        );
    }
}

export default PracticeAreas;
