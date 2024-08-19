import React from "react";
import './main.css';
import './main.scss'



const Main = () => {
    return(
<section className="aboutUsSection">
            <div className="aboutUsContainer">
                <h1 className="aboutTitle">Best and Experienced Faculties</h1>
                <p className="aboutDescription">
                We had bring the best experts of medical field to provide you the best service as possible. We are trying our best to serve the world with our facilities, so that everyone can have a proper medical facility to avail.                </p>
                <div className="infoBoxes">
                    <div className="infoBox">
                        <h2 className="infoTitle">20 +</h2>
                        <p className="infoText">Doctors</p>
                    </div>
                    <div className="infoBox">
                        <h2 className="infoTitle">50,000 +</h2>
                        <p className="infoText">Customers</p>
                    </div>
                    <div className="infoBox">
                        <h2 className="infoTitle">500 +</h2>
                        <p className="infoText">Students</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main