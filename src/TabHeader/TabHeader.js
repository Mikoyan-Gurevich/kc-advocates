import React, { Component } from 'react';
import './TabHeader.css';
import imag from '../Logo4.png';
<<<<<<< HEAD
=======
import bgImg from '../123.jpg';

>>>>>>> asdasd

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
<<<<<<< HEAD
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

=======
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
>>>>>>> asdasd
                </div>
            </div>

        );
    }
}

export default TabHeader;
