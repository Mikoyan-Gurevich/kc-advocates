import React, { Component } from 'react';
import './TabHeader.css';
import imag from '../Logo4.png';

class TabHeader extends Component {
    constructor(props) {
        super(props);
        this.tabConfig = [
            {
                name: 'home',
                label: 'Home'
            },
            {
                name: 'practiceAreas',
                label: 'Practice Areas'
            },
            {
                name: 'aboutUs',
                label: 'About Us'
            },
            {
                name: 'contactUs',
                label: 'Contact Us'
            },
            {
                name: 'faq',
                label: 'FAQ'
            }
        ];

        this.state = {
            selectedTab: 'home'
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
                <div className="MainPage">

                </div>
            </div>

        );
    }
}

export default TabHeader;
