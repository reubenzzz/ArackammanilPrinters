// components/ContactLandingSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './ContactLanding.css';
import { useNavigate } from 'react-router-dom';

const ContactLandingSection = () => {
    const navigate = useNavigate();
    const handlecontact = () => {
        // navigate('/contact-us');
    };

    return (
        <section className="contact-landing-section">
            <div className="contact-landing-overlay"></div>

            <div className="contact-landing-container">
                <motion.div
                    className="contact-landing-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="contact-landing-subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span>READY TO PRINT YOUR VISION?</span>
                    </motion.div>

                    <motion.h2
                        className="contact-landing-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        From Design to Delivery, We’ve Got You Covered
                    </motion.h2>

                    <motion.p
                        className="contact-landing-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        Whether it's brochures, banners, or personalized gifts, our team is ready to bring your ideas to life with precision and care.
                    </motion.p>

                    <motion.div
                        className="contact-landing-button"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <button className="contact-landing-btn" onClick={handlecontact}>
                            <span>Get in Touch</span>
                            <FaArrowRight className="contact-landing-icon" />
                            <div className="contact-landing-btn-hover"></div>
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            <div className="contact-landing-shapes">
                <div className="contact-landing-shape-1"></div>
                <div className="contact-landing-shape-2"></div>
                <div className="contact-landing-shape-3"></div>
            </div>
        </section>
    );
};

export default ContactLandingSection;
