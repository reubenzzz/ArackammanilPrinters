import React from 'react';
import './AboutUs.css';
import { motion } from 'framer-motion';
import img1 from '../assets/aboutus1.jpg';
import img2 from '../assets/aboutus2.jpg';
import img3 from '../assets/aboutus1.jpg'; // Add a third image for the gallery

const AboutUs = () => {
    return (
        <section id="about-us" className="about-us-section">
            <div className="golden-line"></div>

            <motion.div
                className="about-us-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="about-text-content">
                    <div className="our-services-header">
                        <div className='our-service-title'>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Printing Beyond Paper,<br />Delivering Ideas to Life
                            </motion.h2>
                            <div className="our-service-line-heading" />
                        </div>
                        <div className="about-us-line-container">
                            <div className="about-us-line" />
                            <motion.span
                                className="about-us-subtitle"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                ABOUT US
                            </motion.span>
                        </div>

                    </div>


                    <div className="description-container">
                        <motion.p
                            className="about-us-description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Established in 1971 by Thomas Philip LPT (Babychen), Arackamannil Printers is a modern printing facility equipped with advanced technology and experienced staff. We offer end-to-end printing solutions including Offset, Flex, Screen, Laser, and Digital printing.
                        </motion.p>

                        <motion.p
                            className="about-us-description"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            Our mission is to deliver high-quality printing using the best materials at competitive prices, while continuously innovating and prioritizing customer satisfaction. Our vision is to be a leading name in the printing industry, both locally and regionally.
                        </motion.p>
                    </div>



                    <motion.div
                        className="button-container"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="about-us-button"
                            whileHover={{
                                color: "#ffffff"
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact Us
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>

                <div className="image-content">
                    <motion.div
                        className="image-grid"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="main-image"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4 }}
                        >
                            <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1751268325/business-success-with-modern-technology-equipment-generated-by-ai_ivoojl.jpg" alt="Luxury interior design" />
                        </motion.div>
                        <div className="secondary-images">
                            <motion.div
                                className="image-2"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1751268284/women-holding-paper-side-view_g3ddn9.jpg" alt="Design detail" />
                            </motion.div>
                            <motion.div
                                className="image-3"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                            >
                                <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1751268325/business-success-with-modern-technology-equipment-generated-by-ai_ivoojl.jpg" alt="Material texture" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* <motion.div
                        className="stats-container"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">15+</div>
                            <div className="stat-label">Years Experience</div>
                        </motion.div>
                        <div className="stat-divider"></div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">250+</div>
                            <div className="stat-label">Projects Completed</div>
                        </motion.div>
                        <div className="stat-divider"></div>
                        <motion.div
                            className="stat-item"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="stat-value">50+</div>
                            <div className="stat-label">Awards Received</div>
                        </motion.div>
                    </motion.div> */}
                </div>
            </motion.div>

            <motion.div
                className="signature-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <div className="signature-line"></div>
                <div className="signature">Founder - Thomas Philip LPT</div>
            </motion.div>
        </section>
    );
};

export default AboutUs;