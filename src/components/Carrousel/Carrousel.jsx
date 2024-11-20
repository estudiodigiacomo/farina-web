import React from "react";
import { Carousel } from "react-bootstrap";
import './Carrousel.scss';

const ImageCarousel = () => {
    const images = [
        { src: "src/assets/banner2.webp"},
        { src: "src/assets/banner1.webp"},
        { src: "src/assets/banner6.webp"},
        { src: "src/assets/banner5.webp"},
        { src: "src/assets/banner4.webp"},
    ];

    return (
        <Carousel className="custom-carousel">
        {images.map((image, index) => (
            <Carousel.Item key={index} className="custom-carousel-item">
            <img
                className="d-block w-100 custom-carousel-image"
                src={image.src}
                alt={`Slide ${index}`}
            />
            </Carousel.Item>
        ))}
        </Carousel>
    );
    };

export default ImageCarousel;
