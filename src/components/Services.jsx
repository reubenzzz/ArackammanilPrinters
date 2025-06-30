import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import {
    FaPrint,
    FaBook,
    FaIdBadge,
    FaImage,
    FaGift,
    FaLayerGroup,
    FaStamp,
    FaBullhorn,
    FaTags
} from 'react-icons/fa';

const services = [
    {
        title: 'Offset & Digital Printing',
        description: 'High-quality prints for flyers, brochures, and more with sharp details and vibrant colors.',
        icon: <FaPrint />
    },
    {
        title: 'Book & Magazine Printing',
        description: 'Professionally bound books, magazines, and church bulletins in various finishes.',
        icon: <FaBook />
    },
    {
        title: 'ID Cards & Certificates',
        description: 'Durable, customized ID cards and laminated certificates for schools and events.',
        icon: <FaIdBadge />
    },
    {
        title: 'Banners & Posters',
        description: 'Large-format, eye-catching prints ideal for promotions, events, and weddings.',
        icon: <FaImage />
    },
    {
        title: 'Custom Gifts & Invitations',
        description: 'Personalized mugs, T-shirts, and invitation cards for special occasions.',
        icon: <FaGift />
    },
    {
        title: 'Binding & Finishing',
        description: 'Binding, lamination, and finishing services to give your documents a professional touch.',
        icon: <FaLayerGroup />
    },
    {
        title: 'Rubber Stamp Making',
        description: 'Custom rubber stamps for business, schools, and personal use.',
        icon: <FaStamp />
    },
    {
        title: 'Flex Printing',
        description: 'High-resolution, weather-resistant flex printing for hoardings and backdrops.',
        icon: <FaBullhorn />
    },
    {
        title: 'Sticker Printing',
        description: 'Vibrant and durable stickers for branding, labeling, and personal use.',
        icon: <FaTags />
    }
];

const OurServices = () => {
    return (
        <section className="our-services-section">
            <div className="our-services-header-padding">
                <div className="our-services-header">
                    <div className='our-service-title'>
                        <h2>Printing Solutions Crafted<br />For Every Need</h2>
                        <div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">OUR SERVICES</span>
                    </div>
                </div>
            </div>
            <div className="our-services-grid-wrapper">
                <div className="our-services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeInOut' }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <div className="service-header">
                                <div className="service-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.description}</p>
                            <div className="service-hover-line"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
