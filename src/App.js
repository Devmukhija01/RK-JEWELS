import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header'; // Ensure you have this line
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import Necklaces from './Components/Necklaces'; // Import Necklaces component
import Rings from './Components/Rings';
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
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/necklaces" element={<Necklaces />} /> {/* Route for Necklaces */}
                    <Route path="/rings" element={<Rings />} /> {/* Route for Rings */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
