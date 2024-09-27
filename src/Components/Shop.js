import React from 'react';
import './Shop.css'; // Ensure you have this CSS file for styling

const Shop = () => {
    return (
        <div className="shop-container">
            <h1>Jewellery Collection</h1>
            <p>Explore our exquisite collection of necklaces and rings. Watch the videos below for a closer look!</p>

            <div className="shop-videos">
                {/* Necklaces Video */}
                <div className="video-container">
                    <h2>Necklaces Collection</h2>
                    <video controls>
                        <source src={require('../Images/necklaces.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <a href="/necklaces" className="view-collection-button">View Collection</a>
                </div>

                {/* Rings Video */}
                <div className="video-container">
                    <h2>Rings Collection</h2>
                    <video controls>
                        <source src={require('../Images/rings.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <a href="/rings" className="view-collection-button">View Collection</a>
                </div>
            </div>
        </div>
    );
};

export default Shop;
