import React from 'react';
import './Rings.css'; // For additional CSS specific to this component
import Image1 from '../Images/Gold.jpg';
import Image2 from '../Images/Diamond ring.jpg';
const Rings = () => {
    return (
        <div className="rings-container">
            <h1 className="rings-title">Ring Collection</h1>
            <div className="collection-grid">
                {/* You can add your ring items here */}
                <div className="collection-item1">
                    <img src={Image1} alt="Ring 1" />
                    <h2>Gold Ring</h2>
                    <p>Description of the ring.</p>
                </div>
                {/* Add more items similarly */}
                <div className="collection-item1">
                    <img src={Image2} alt="Ring 1" />
                    <h2>Diamond Ring</h2>
                    <p>Description of the ring.</p>
                </div>
            </div>
        </div>
    );
};

export default Rings;
