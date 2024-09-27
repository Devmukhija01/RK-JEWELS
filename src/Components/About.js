import React from 'react';
import './About.css'; // Assuming your CSS file is named About.css

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h2>About Us</h2>
                <p>Welcome to our Jewelry Shop, where elegance meets craftsmanship. We are a family-owned business with a rich heritage of creating timeless jewelry pieces for over 25 years. Each piece of jewelry is crafted with passion and dedication to bring out the beauty and charm in every individual.</p>
                <p>At our shop, we specialize in a wide range of jewelry, including necklaces, earrings, bracelets, and custom-made pieces for special occasions. Our focus is on offering you the finest quality jewelry that reflects your personality and style.</p>
                
                <div className="container">
                    <div className="card_box">
                        <span></span>
                        <div className="shop-details">
                            <h3>Shop Details</h3>
                            <ul>
                                <li><strong>Shop Name:</strong> RK Jewels</li>
                                <li><strong>Address:</strong> 123 Sparkle Street, Golden Town, Jewelry City, Country</li>
                                <li><strong>Owner Name:</strong> Mr. Rishabh Kanther</li>
                                <li><strong>Owner Contact:</strong> +91-9509048303</li>
                            </ul>
                        </div>

                        <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default About;
