// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './AboutUsPage.css';
import founder from '../assets/Page 2-25.jpg';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
    const navigate = useNavigate();
    const handlecontact = () => {
        navigate('/contact-us');
    }
    const services = [
        {
            title: 'Offset & Digital Printing',
            description: 'High-quality prints for flyers, brochures, and more with sharp details and vibrant colors.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751278949/High-Quality_Large-Format_Posters__Where_to_Get_Them_Printed_l2rldm.jpg'
        },
        {
            title: 'Book & Magazine Printing',
            description: 'Professionally bound books, magazines, and church bulletins in various finishes.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751279195/Crisis_de_papel_afecta_contenido_informativo_de_El_Carabobe%C3%B1o_jldh8e.jpg'
        },
        {
            title: 'ID Cards & Certificates',
            description: 'Durable, customized ID cards and laminated certificates for schools and events.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751279292/White_printing_on_card_ribbon_ymjjcf.jpg'
        },
        {
            title: 'Banners & Posters',
            description: 'Large-format, eye-catching prints ideal for promotions, events, and weddings.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751279365/Need_high-quality_printing_services_in_Irvine_hj7uya.jpg'
        },
        {
            title: 'Custom Gifts & Invitations',
            description: 'Personalized mugs, T-shirts, and invitation cards for special occasions.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751279292/White_printing_on_card_ribbon_ymjjcf.jpg'
        },
        {
            title: 'Binding & Finishing',
            description: 'Binding, lamination, and finishing services to give your documents a professional touch.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751279543/download_3_gaqlrg.jpg'
        },
        {
            title: 'Rubber Stamp Making',
            description: 'Custom rubber stamps for business, schools, and personal use.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751279769/8_Clauses_Your_Freelance_Contract_Needs___Crunch_sor4jn.jpg'
        },
        {
            title: 'Flex Printing',
            description: 'High-resolution, weather-resistant flex printing for hoardings and backdrops.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751268325/business-success-with-modern-technology-equipment-generated-by-ai_ivoojl.jpg'
        },
        {
            title: 'Sticker Printing',
            description: 'Vibrant and durable stickers for branding, labeling, and personal use.',
            image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1751268325/business-success-with-modern-technology-equipment-generated-by-ai_ivoojl.jpg'
        }
    ];





    return (
        <div className="about-page">
            <Header />
            <div className="about-page-hero">
                <div className="about-page-hero-overlay"></div>
                <motion.div className="about-page-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>Legacy in Print Since 1971</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                        Precision. Passion. Print — Arackamannil Printers
                    </motion.p>
                </motion.div>
            </div>

            <section className="about-page-story">
                <motion.div className="about-page-section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                    <div className="about-page-accent-line"></div>
                    <h2>Our Story</h2>
                </motion.div>

                <div className="about-page-story-content founder-layout">
                    <motion.div className="about-page-story-text" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                        <p>Arackamannil Printers was established in 1971 by Thomas Philip LPT (Babychen). With state-of-the-art machinery and a team of experienced professionals, we offer a full spectrum of services — from design to delivery — across Offset, Flex, Screen, Laser, and Digital printing.</p>
                        <p>Our facilities are equipped to handle pre-press and post-press processes efficiently, ensuring your ideas are transformed into stunning print outputs. With decades of experience, we continue to serve our clients with passion and precision.</p>
                        <p><strong>VISION:</strong> To be the most recognized name in the printing industry, locally and regionally.</p>
                        <p><strong>MISSION:</strong> To produce top-quality printing solutions using premium materials and modern technology, ensuring every customer receives unmatched service, innovation, and value.</p>
                    </motion.div>
                    <motion.div className="founder-image-container" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
                        <img src={founder} alt="Founder Thomas Philip (Babychen)" className="founder-photo" />
                        <div className="founder-caption">Thomas Philip LPT (Babychen), Founder</div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section - Minimal redesign */}
            {/* <section className="about-page-values">
                <motion.div
                    className="about-page-section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-page-accent-line"></div>
                    <h2>Our Values</h2>
                </motion.div>

                <div className="about-page-values-grid">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="about-page-value-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="about-page-value-icon">{value.icon}</div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section> */}

            {/* Services Section - Minimal redesign */}
            <section className="about-page-services">
                <motion.div
                    className="about-page-section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-page-accent-line"></div>
                    <h2>Our Services</h2>
                </motion.div>

                <div className="about-page-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="about-page-service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div
                                className="service-image-bg"
                                style={{ backgroundImage: `url(${service.image})` }}
                            >
                                <div className="service-overlay"></div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <div className="yellow-line"></div>
                                    <div className="service-description">
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section - Minimal redesign */}


            {/* CTA Section - Kept as requested */}
            {/* <section className="about-page-cta">
                <div className="about-page-cta-overlay"></div>
                <div className="about-page-cta-content">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        Ready to transform your space?
                    </motion.h2>
                    <motion.button
                        className="about-page-cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        onClick={handlecontact}
                    >
                        Schedule a Consultation
                    </motion.button>
                </div>
            </section> */}
            <Footer />
        </div>
    );
};

export default AboutPage;