import React from "react";
import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

/* import OurServices from './Components/OurServices/OurServices'; 
import Appointment from './Components/Appointment/Appointment'; 
import Appointment from './Components/ContactUs/ContactUs'; 
 */
const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Main />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />



{/*                     <Route path="/about" element={<OurServices />} />
                    <Route path="/about" element={<Appointment />} />
                    <Route path="/about" element={<ContactUs />} />
 */}                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
