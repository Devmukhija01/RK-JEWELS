import React, { useState } from 'react';
import './Slideshow.css';
import Image1 from '../Images/Jewelry collection instagram post flyer - Made with PosterMyWall.jpg';
import Image4 from '../Images/Purple Instagram Post Ad for Jewelers - Made with PosterMyWall.jpg';

const Slideshow = () => {
    const slides = [
        { id: 1, image: Image1, caption: 'Slide 1: Stunning Gold Ring' },
        { id: 3, image: Image4, caption: 'Slide 4: Luxurious Platinum Ring' }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slideshow-container">
            <div className="slideshow">
                <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} className="slide-image" />
                <div className="caption">{slides[currentSlide].caption}</div>
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
            <div className="dots">
                {slides.map((_, index) => (
                    <span 
                        key={index} 
                        className={`dot ${currentSlide === index ? 'active' : ''}`} 
                        onClick={() => setCurrentSlide(index)} 
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;
