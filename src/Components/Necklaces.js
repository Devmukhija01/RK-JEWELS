import React from 'react';
import './Necklaces.css'; // For additional CSS specific to this component
import Image1 from '../Images/C U T E.jpeg';
import Image2 from '../Images/Silver nacklaces.jpg';
const Necklaces = () => {
    return (
        <div className="necklaces-container">
            <h1 className="necklaces-title">Necklace Collection</h1>
            <div className="collection-grid">
                {/* You can add your necklace items here */}
                <div className="collection-item1">
                    <img src={Image1} alt="Necklace 1" />
                    <h2>Elegant Gold Necklace</h2>
                    <p>Description of the necklace.</p>
                </div>
                <div className="collection-item1">
                    <img src={Image2} alt="Necklace 2" />
                    <h2>Elegant Silver Necklace</h2>
                    <p>Description of the necklace.</p>
                </div>
                {/* Add more items similarly */}
            </div>
        </div>
    );
};

export default Necklaces;