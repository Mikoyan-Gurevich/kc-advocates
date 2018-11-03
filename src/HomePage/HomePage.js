import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

    render() {
        return (

            <div className="MainPage">
                <div className="rightSide">
                    <div className="boxRightSide"> <h1>CRIMINAL DEFENCE LAW FIRM</h1>
                        <div>To be the best in law defence</div>
                        <div> To be the best in law defence</div>
                    </div></div>
                <div className="leftSide">
                    <div className="boxLeftSide"><h1>ONLY CLIENT MATTER</h1>
                        <div className="MoreInfo">
                            <button>Sectors</button>
                            <button>Practice Areas</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default HomePage;