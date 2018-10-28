import React, { Component } from 'react';
import './TabHeader.css';
import imag from '../Logo4.png';
import AboutUs from '../AboutUs/AboutUs';
import config from '../utils/config';
import strings from '../utils/strings';

class TabHeader extends Component {
    constructor(props) {
        super(props);
        this.tabConfig = config.tabConfig;
        this.state = {
            selectedTab: config.tabConfig[0].name // Initially the first element should be shown as highlighted
        }
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(name) {
        this.setState({ selectedTab: name });
    }

    render() {
        const { tabConfig, selectTab } = this;
        const { selectedTab } = this.state;
        return (
            <div className="TabHead">
                <div className='headera'>
                    <div>
                        <img className="logo" src={imag} alt="logo" />
                    </div>
                    <div className='tabs'>
                        {tabConfig.map((tab, key) => {
                            return (<div
                                key={key}
                                className={selectedTab === tab.name ? 'normalTab selectedTab' : 'normalTab'}
                                onClick={selectTab.bind(null, tab.name)}>{tab.label}
                            </div>);
                        })}
                    </div>
                </div>
                <div>
                    {selectedTab === 'aboutUs' && <AboutUs />}
                </div>
                {/* <div className="MainPage">
                    <div className="MainTitle"></div>
                    <div className="WorkingAreas">ONLY CLIENT MATTER
                                <button class="sector_Button">Sectors</button>
                        <button class="prac_areas">Practice Areas</button>
                    </div>
                    <div className="WorkingAreas_two"><h1>CRIMINAL DEFENCE LAW FIRM</h1>
                        <p>To be the best in law defence</p>
                            <p> To be the best in law defence</p></div>
                </div> */}
            </div>
        );
    }
}

export default TabHeader;
