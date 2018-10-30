import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

    render() {
        return (

            <div className="MainPage">
                <div className="MainTitle"></div>
                <div className="WorkingAreas">ONLY CLIENT MATTER
                                <button className="sector_Button">Sectors</button>
                    <button className="prac_areas">Practice Areas</button>
                </div>
                <div className="WorkingAreas_two"><h1>CRIMINAL DEFENCE LAW FIRM</h1>
                    <p>To be the best in law defence</p>
                    <p> To be the best in law defence</p></div>
            </div>

        );
    }
}

export default HomePage;