import React from "react";
import { Link } from 'react-router-dom'; // Import Link for routing
import './home.css'; 
import './home.scss'; 
import stethoscope from '../../Assets/stethoscope.png'; 
import greenBox from '../../Assets/greenBox.png'; 
import yellowBox from '../../Assets/yellowBox.png'; 
import doctor from '../../Assets/doctor.png'; 
import topAngle from '../../Assets/topAngle.png';
import bottomAngle from '../../Assets/bottomAngle.png'; 

const Home = () => {
    return (
        <section className='home'>
            <div className="overlay"></div>

            <div className="homeContent container">

                <div className="circleWrapper">
                    <img src={greenBox} alt="Green Circle" className="greenBox" />
                    <img src={yellowBox} alt="Yellow Circle" className="yellowBox" />
                    <img src={doctor} alt="Doctor" className="doctor" />
                </div>

                <div className="textDiv">
                    <img src={topAngle} alt="Top Angle" className="topAngle" />
                    <br />
                    <h1 className="homeTitle">
                        Complete Health<br />Care Solutions for <br />Everyone
                    </h1>

                    <span className="smallText">
                        We're always available for our Patients with emergency problems. You can <br />
                        easily reach us 24/7. We focus on the highest quality.
                    </span>
                    <br />
                    <br />

                    <img src={bottomAngle} alt="Bottom Angle" className="bottomAngle" />

                    <img src={stethoscope} alt="Stethoscope" className="stethoscope" />

                    <Link to="/appointment"> {/* Use Link for routing */}
                        <button className="btn1">
                            Make Appointment
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;