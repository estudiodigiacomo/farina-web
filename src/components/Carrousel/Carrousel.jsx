import React from "react";
import { Carousel } from "react-bootstrap";
import './Carrousel.scss';

const ImageCarousel = () => {
    const images = [
        { src: "https://storage.googleapis.com/farina_img/banner1.webp"},
        { src: "https://storage.googleapis.com/farina_img/banner2.webp"},
        { src: "https://storage.googleapis.com/farina_img/banner4.webp"},
        { src: "https://storage.googleapis.com/farina_img/banner5.webp"},
        { src: "https://storage.googleapis.com/farina_img/banner6.webp"},
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
