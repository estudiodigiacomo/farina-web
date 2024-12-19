import React from "react";
import { Carousel } from "react-bootstrap";
import "./GaleryTitles.scss";

const GalleryAndCarousel = () => {
const galleryImages = [
    { src: "https://storage.googleapis.com/farina_img/certificado%20(5).webp", alt: "Image 1" },
    { src: "https://storage.googleapis.com/farina_img/certificado%20(2).webp", alt: "Image 2" },
    { src: "https://storage.googleapis.com/farina_img/certificado%20(3).webp", alt: "Image 3" },
    { src: "https://storage.googleapis.com/farina_img/certificado%20(6).webp", alt: "Image 4" },
    { src: "https://storage.googleapis.com/farina_img/certificado%20(1).webp", alt: "Image 5" },
    { src: "https://storage.googleapis.com/farina_img/certificado%20(4).webp", alt: "Image 6" },
];

const carouselImages = [
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(1).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(4).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(5).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(6).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(7).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(8).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(9).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(10).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(11).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(12).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(13).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(14).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(15).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(16).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(17).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(18).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(19).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(20).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(21).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(22).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(23).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(24).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(25).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/cert-sec%20(26).webp", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/jpg-cert-sec%20(25).jpg", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/jpg-cert-sec%20(26).jpg", alt: "Carousel Image 1" },
    { src: "https://storage.googleapis.com/farina_img/jpg-cert-sec%20(24).jpg", alt: "Carousel Image 1" },
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
