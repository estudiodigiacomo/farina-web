import React from "react";
import { Carousel } from "react-bootstrap";
import "./GaleryTitles.scss";

const GalleryAndCarousel = () => {
const galleryImages = [
    { src: "src/assets/certificado (5).webp", alt: "Image 1" },
    { src: "src/assets/certificado (2).webp", alt: "Image 2" },
    { src: "src/assets/certificado (3).webp", alt: "Image 3" },
    { src: "src/assets/certificado (6).webp", alt: "Image 4" },
    { src: "src/assets/certificado (4).webp", alt: "Image 5" },
    { src: "src/assets/certificado (1).webp", alt: "Image 6" },
];

const carouselImages = [
    { src: "src/assets/img/cert-sec/cert-sec (1).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (2).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (3).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (4).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (5).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (6).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (7).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (8).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (9).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (10).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (11).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (12).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (13).webp", alt: "Carousel Image 1" },
    { src: "src/assets/img/cert-sec/cert-sec (14).webp", alt: "Carousel Image 1" },
];

return (
    <div className="gallery-and-carousel">
        {/* Galería */}
        <div className="image-gallery">
            {galleryImages.map((image, index) => (
            <div key={index} className="image-item">
                <img src={image.src} alt={image.alt} />
            </div>
            ))}
        </div>

        {/* Carrusel */}
        <div className="carrousel-content">
            <Carousel className="carrousel-cert">
                {carouselImages.map((image, index) => (
                <Carousel.Item className="carrousel-item" key={index}>
                    <img className="d-block w-100" src={image.src} alt={image.alt} />
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </div>
);
};

export default GalleryAndCarousel;
