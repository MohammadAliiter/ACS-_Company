import React, { useState } from "react";
import "./card.css";

import productImage1 from "../../Image/slider.avif";
import productImage2 from "../../Image/slider1.webp";
import productImage3 from "../../Image/slider2.jpg";
import productImage4 from "../../Image/slider3.jpg";

const products = [
    { id: 1, name: "Digital & Software", description: "Superior and differntiated customer experiences to enhance competitive advantage.", image: productImage1 },
    { id: 2, name: "Cloud Services", description: "Flexible Cloud solution to accelerate your journey to the future.", image: productImage2 },
    { id: 3, name: "Mobile Application", description: "Build your custom powerful mobile applications with no code", image: productImage3 },
    { id: 4, name: "Cybersecurity", description: "Secure your all assets and data with security network & firewalls", image: productImage4 },
    { id: 5, name: "Hardware & Networking", description: "A One Technology Solution JV brings 16 of experience in setting up your server, data centers and more", image: productImage1 },
    { id: 6, name: "Training & placement", description: "Streamline your recruitment proces and build a skilled workforce through our Training and Placement Services", image: productImage2 },
    { id: 7, name: "Digital Marketing", description: "Implementing targeted digital marketing strategies to enhance online visibility, drive customer engagement, and boost business growth", image: productImage3 },
    { id: 8, name: "Business Analytics", description: "Analyzing and interpreting data to provide actionable insights,enabling informed decision-making for business growth.", image: productImage4 },
    { id: 9, name: "AI/ML/LoT", description: "Harness the power of AI/ML and derive actionable insights from data with our services in artificial intelligence,machine learning, and business analytics.Stay  ahead in a.....", image: productImage1 },
];

const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', updateIsMobile);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - (isMobile ? 1 : 4) ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - (isMobile ? 1 : 4) : prevIndex - 1
        );
    };

    return (
        <div className="product-slider-container custom-slider">
            <h2 className="slider-title">Empower Your Business With Access to World-Class Products, Services, And Solutions</h2>
            <p className="slider-description">We Cover Your Connected IT Ecosystem.</p>
            <div className="product-slider">
                <div
                    className="cards-container"
                    style={{
                        transform: `translateX(-${currentIndex * (isMobile ? 100 : 25)}%)`,
                    }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="card custom-card" style={{ backgroundImage: `url(${product.image})` }}>
                            <div className="card-content custom-card-content">
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="nav-buttons">
                <button className="nav-button prev custom-nav-button" onClick={prevSlide}>
                <i class="fa-solid fa-angle-left"></i>
                </button>
                <button className="nav-button next custom-nav-button" onClick={nextSlide}>
                <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Card;
