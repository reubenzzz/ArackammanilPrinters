import React from "react";
import { motion } from "framer-motion";

const GalleryPopup = ({ category, onClose }) => {
    if (!category) return null;

    const whatsappMessage = `Hello, I would like to print a ${category.name}.`;
    const whatsappURL = `https://wa.me/919349489349?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <motion.div 
            className="gallery-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div 
                className="gallery-popup-box"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
            >
                <button className="gallery-close-btn" onClick={onClose}>✕</button>
                
                <h2>{category.name}</h2>

                {/* Carousel */}
                <div className="gallery-carousel">
                    {category.gallery?.map((media, idx) => (
                        <div key={idx} className="gallery-item">
                            {media.type === "video" ? (
                                <video controls>
                                    <source src={media.url} type="video/mp4" />
                                </video>
                            ) : (
                                <img src={media.url} alt={`${category.name} ${idx+1}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* WhatsApp Button */}
                <motion.button
                    className="gallery-whatsapp-btn"
                    onClick={() => window.open(whatsappURL, "_blank")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Message on WhatsApp
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default GalleryPopup;
