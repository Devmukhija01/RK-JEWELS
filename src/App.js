import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header'; // Ensure you have this line
import Home from './Components/Home';
import Shop from './Components/Shop';
import Necklaces from './Components/Necklaces'; // Import Necklaces component
import Rings from './Components/Rings';
import About from './Components/About';
import Contact from './Components/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Header /> {/* Ensure the Header component is rendered */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/necklaces" element={<Necklaces />} /> {/* Route for Necklaces */}
                    <Route path="/rings" element={<Rings />} /> {/* Route for Rings */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
