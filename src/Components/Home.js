import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Image1 from '../Images/perfectGift2.jpg';
import Image2 from '../Images/perfectGift3.jpg';

const Home = () => {
    const navigate = useNavigate(); // Create a navigate function using the hook

    // Function to handle the Shop Now button click
    const handleShopNow = () => {
        navigate('/shop'); // This will navigate the user to the '/shop' route
    };
    return (
        <div className="home">
            <div className="home-header">
                {/* <h1>Welcome to Our Jewelry Store</h1> */}
                <h4>Explore the finest collection of exquisite jewellery</h4>
            </div>
            <div className="jewellery-showcase">
                <div className="jewellery-item">
                    <img src={Image1} alt="Jewelry 1" />
                    <h2>Elegant Necklace</h2>
                    <p>$120</p>
                </div>
                <div className="jewellery-item">
                    <img src={Image2} alt="Jewelry 2" />
                    <h2>Diamond Ring</h2>
                    <p>$250</p>
                </div>
                {/* Add more jewelry items here */}
            </div>
            <div className="cta-section">
                <button onClick={handleShopNow}>Shop Now</button>
            </div>
        </div>
    );
};

export default Home;
