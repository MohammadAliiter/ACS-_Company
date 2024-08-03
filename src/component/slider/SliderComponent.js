import React, { useEffect, useState } from "react";
import "./SliderComponent.css";
import FormData from "../../globalComponent/Form/FormData";

import image1 from "../../Image/slider.avif";
import image2 from "../../Image/slider1.webp";
import image3 from "../../Image/slider2.jpg";
import image4 from "../../Image/slider3.jpg";

const images = [image1, image2, image3, image4];

const SliderComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = () => {
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
    };

    return (
        <div className="acs-slider">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`acs-slide ${index === currentIndex ? "active" : ""}`}
                    style={{ backgroundImage: `url(${image})` }}
                >
                    <div className="acst-content">
                        <h2>Digitally Transform Your Ecosystem</h2>
                        <p>Unleash Transformative Influence Across Your Digital Ecosystem And Beyond</p>
                        <button onClick={handleButtonClick}>Connect with a Digital Transformer</button>
                    </div>
                </div>
            ))}
            <div className="navigation">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div>

            {isFormOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="popup-close" onClick={handleCloseForm}>X</button>
                        <FormData />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SliderComponent;
