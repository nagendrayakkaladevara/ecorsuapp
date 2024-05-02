import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer); // Clear the interval when the component unmounts
    }, [images.length]);

    return (
        <div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    style={{ display: index === currentIndex ? 'block' : 'none', width: "-webkit-fill-available" }}
                />
            ))}
        </div>
    );
};

export default Carousel;