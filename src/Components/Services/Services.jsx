import React from "react";
import './services.css'; // You can use your own CSS or SCSS file
import './services.scss'; // SCSS file for styling

const Services = () => {
    return (
        <section className="services">
            <div className="servicesContent container">
                <h1 className="servicesTitle">Our Services</h1>
                <div className="servicesList">
                    <div className="serviceItem">
                        <h2 className="serviceTitle">Consultations</h2>
                        <p className="serviceDescription">
                            We offer expert consultations to help you with your medical needs and health concerns.
                        </p>
                    </div>
                    <div className="serviceItem">
                        <h2 className="serviceTitle">Emergency Care</h2>
                        <p className="serviceDescription">
                            Our emergency services are available 24/7 to handle urgent medical situations.
                        </p>
                    </div>
                    <div className="serviceItem">
                        <h2 className="serviceTitle">Diagnostic Services</h2>
                        <p className="serviceDescription">
                            We provide comprehensive diagnostic services to accurately assess your health condition.
                        </p>
                    </div>
                    <div className="serviceItem">
                        <h2 className="serviceTitle">Surgical Procedures</h2>
                        <p className="serviceDescription">
                            Our skilled surgeons perform a range of surgical procedures with the highest standards of care.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
