import React, { useState, useEffect } from "react";
import { getCards } from "../../services/areaPracticeService.js";
import ImageCarousel from '../../components/Carrousel/Carrousel'
import "./CardsArea.scss";

const CardsArea = () => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const cardsData = await getCards();
                setCards(cardsData);
            } catch (error) {
                console.error("Error loading cards:", error);
            }
        };

        fetchCards();
    }, []);

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsLoading(true); 
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCard(null);
    };

    const handleImageLoad = () => {
        setIsLoading(false); // Desactiva el loader cuando la imagen se carga
    };

    return (
        <>
            <p className="title_areas">Áreas de Práctica</p>
            <ImageCarousel/>
            <div className="cards-container">
                {cards.map((card) => (
                    <div 
                        key={card.id} 
                        className="card" 
                        onClick={() => handleCardClick(card)}
                    >
                        <h3 className="card-title-area">{card.title}</h3>
                    </div>
                ))}

                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={closeModal}>×</button>
                            {isLoading && <div className="loader"></div>}
                            <div className={`modalbody ${isLoading ? "hidden" : ""}`}>
                                <img 
                                    src={selectedCard?.banner} 
                                    alt={selectedCard?.title} 
                                    className="card-image" 
                                    onLoad={handleImageLoad} 
                                    loading="lazy" 
                                />
                                <h2>{selectedCard?.title}</h2>
                                <p>{selectedCard?.content}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default CardsArea;
