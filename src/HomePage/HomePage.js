import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

    render() {
        return (

            <div className="MainPage">


                <div className="rightSide">
                    <h1>CRIMINAL DEFENCE LAW FIRM</h1>
                    <div>To be the best in law defence</div>
                    <div> To be the best in law defence</div>
                </div>
                <div className="leftSide">
                    <h1>ONLY CLIENT MATTER</h1>
                    <div className="MoreInfo">  <button className="sector_Button">Sectors</button>
                        <button className="prac_areas">Practice Areas</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomePage;