import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import Necklaces from './Components/Necklaces';
import Rings from './Components/Rings';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/necklaces" element={<Necklaces />} />
                    <Route path="/rings" element={<Rings />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
