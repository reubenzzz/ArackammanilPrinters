// src/components/LandingPage.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LandingPage.css';
import Header from './Header';
import bg1 from '../assets/bg.jpg'
import bg2 from '../assets/bg1.jpg'
import bg3 from '../assets/bg2.jpg'
import AboutUs from './AboutUs';
import OurServices from './Services';
import ReportCounter from './ReportCounter';
import OurWorkFlow from './OurServices';
import CustomerReviews from './CustomerReviews';
import Footer from './Footer';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaEnvelope } from "react-icons/fa";
import ContactLandingSection from './ContactLanding';
import logo from '../assets/logoar.png';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
const SplashScreen = ({ onComplete }) => {
    const [step, setStep] = useState(0);

    const companyName = "Arackamannil   Printers";
    const tagline = "We print what you think ";
    const nameLetters = companyName.split('');
    const taglineLetters = tagline.split('');

    useEffect(() => {
        const totalSteps = nameLetters.length + taglineLetters.length + 2;

        const timer = setTimeout(() => {
            if (step < totalSteps - 1) {
                setStep(step + 1);
            } else {
                // Final delay before exiting splash
                setTimeout(() => {
                    onComplete();
                }, 1000);
            }
        }, step < nameLetters.length ? 150 : 60); // Faster for tagline for smoother flow

        return () => clearTimeout(timer);
    }, [step, nameLetters.length, taglineLetters.length, onComplete]);

    return (
        <div className="splash-container">
            <div className="splash-content">
                {/* Title Animation */}
                <AnimatePresence>
                    {step > nameLetters.length + taglineLetters.length && (
                        <motion.div
                            className="logo-container"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.175, 0.885, 0.32, 1.275]
                                }
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.9,
                                transition: { duration: 0.4 }
                            }}
                        >
                            <div className="logo-symbol"><img src={logo} /></div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="name-container">
                    {nameLetters.map((letter, index) => (
                        <motion.span
                            key={index}
                            className="name-letter"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: step > index ? 1 : 0,
                                x: step > index ? 0 : -20
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut"
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>

                {/* Tagline Animation */}
                {step > nameLetters.length && (
                    <div className="tagline-container">
                        {taglineLetters.map((letter, index) => {
                            const show = step > nameLetters.length + index;
                            return (
                                <motion.span
                                    key={index}
                                    className="tagline-letter"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: show ? 1 : 0 }}
                                    transition={{ duration: 0.03 }}
                                >
                                    {letter}
                                </motion.span>
                            );
                        })}
                    </div>
                )}

                {/* Logo Animation */}

            </div>
        </div>
    );
};


const ContactPopup = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, phone, subject, message } = formData;

        const whatsappMessage = `Hello, I'm interested in your printing services. Here are my details:

   Name: ${name}
   Email: ${email}
   Phone: ${phone}
   Subject: ${subject}
   Message: ${message}`;

        const whatsappURL = `https://wa.me/919349489349?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');

        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 3000);
    };

    return (
        <motion.div
            className="contact-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="contact-popup-box"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
            >
                <button className="contact-popup-close-btn" onClick={onClose}>✕</button>
                <h2>Interested in Our Services?</h2>
                <p>Leave your details and we'll get back to you!</p>

                <motion.div
                    className="contact-popup-form-container"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {isSubmitted ? (
                        <div className="contact-popup-success-message">
                            <FaPaperPlane className="contact-popup-success-icon" />
                            <h3>Message Sent Successfully!</h3>
                            <p>Thank you for contacting us. We'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-popup-form" onSubmit={handleSubmit}>
                            <div className="contact-popup-form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="contact-popup-form-input"
                                />
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <div className="contact-popup-form-row">
                                <div className="contact-popup-form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                        className="contact-popup-form-input"
                                    />
                                    <span className="contact-popup-input-highlight"></span>
                                </div>

                                <div className="contact-popup-form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        className="contact-popup-form-input"
                                    />
                                    <span className="contact-popup-input-highlight"></span>
                                </div>
                            </div>

                            <div className="contact-popup-form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    required
                                    className="contact-popup-form-input"
                                />
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <div className="contact-popup-form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    required
                                    className="contact-popup-form-textarea"
                                ></textarea>
                                <span className="contact-popup-input-highlight"></span>
                            </div>

                            <motion.button
                                className="contact-popup-submit-btn"
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <FaPaperPlane className="contact-popup-send-icon" />
                                    </>
                                )}
                                <div className="contact-popup-btn-hover-effect"></div>
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};


const LandingPage = () => {
    const [showSplash, setShowSplash] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const images = ["https://res.cloudinary.com/dpo91btlc/image/upload/v1751268325/business-success-with-modern-technology-equipment-generated-by-ai_ivoojl.jpg",
        "https://res.cloudinary.com/dpo91btlc/image/upload/v1751268284/women-holding-paper-side-view_g3ddn9.jpg"];
    const navigate = useNavigate();

    const contactus = () => {
        const message = "Hello, I am interested in your printing services.";
        const whatsappURL = `https://wa.me/919349489349?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    useEffect(() => {
        const hasSeenSplash = localStorage.getItem('hasSeenSplash');
        if (!hasSeenSplash) {
            setShowSplash(true);
        } else {
            setShowSplash(false);
            // Don't set showContent here - will be handled by the next useEffect
        }
    }, []);

    useEffect(() => {
        if (!showSplash) {
            // Set showContent to true only when splash screen is hidden
            setShowContent(true);

            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [showSplash]);

    useEffect(() => {
        if (showContent) {
            const popupShown = localStorage.getItem('popupShown');
            if (!popupShown) {
                const popupTimer = setTimeout(() => {
                    setShowPopup(true);
                    localStorage.setItem('popupShown', 'true');
                }, 15000);

                return () => clearTimeout(popupTimer);
            }
        }
    }, [showContent]);

    useEffect(() => {
        const clearOnExit = () => {
            localStorage.removeItem('hasSeenSplash');
            localStorage.removeItem('popupShown');
        };

        window.addEventListener('beforeunload', clearOnExit);
        return () => {
            window.removeEventListener('beforeunload', clearOnExit);
        };
    }, []);

    const handleSplashComplete = () => {
        setShowSplash(false);
        localStorage.setItem('hasSeenSplash', 'true'); // important fix
    };

    return (
        <div className="app-container">
            <AnimatePresence mode="wait">
                {showSplash ? (
                    <SplashScreen onComplete={handleSplashComplete} />
                ) : (
                    <motion.div
                        className="landing-page-container"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100vh" }}
                        transition={{ duration: 3, ease: [0.10, 1, 0.36, 1] }}
                    >
                        {showContent && (
                            <>
                                <section id="home">
                                    <div className="landing-page">
                                        <Header />
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentIndex}
                                                className="landing-background-image"
                                                style={{ backgroundImage: `url(${images[currentIndex]})` }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 1 }}
                                            />
                                        </AnimatePresence>

                                        <div className="landing-loverlay" />

                                        <motion.div
                                            initial={{ y: "100%", opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 2 }}
                                            className="landing-hero"
                                        >
                                            <div className="landing-hero-content">
                                                <h1 className='landing-hero-content-h1'>Arackamannil Printers</h1>
                                                <p>
                                                    Printing is not just what we do — it's how we bring your ideas to life.<br />
                                                    With decades of expertise and cutting-edge technology, we deliver more than ink on paper we deliver trust, quality, and creativity with every print.
                                                </p>
                                                <button className="landing-contact-btn" onClick={contactus}>
                                                    Contact Us
                                                    <div className="landing-btn-hover-effect"></div>
                                                </button>
                                            </div>
                                        </motion.div>


                                        <motion.div
                                            initial={{ y: "100%", opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 2 }}
                                            className="landing-social"
                                        >
                                            <div className="landing-social-icons">
                                                <a href="https://www.instagram.com/arackamannil_printers?igsh=aG51OW82YmU2MG50" target="_blank" rel="noopener noreferrer">
                                                    <FaInstagram className="landing-icon" />
                                                </a>
                                                <a href="mailto:arackamannilranny@gmail.com">
                                                    <FaEnvelope className="landing-icon" />
                                                </a>
                                                <a href="https://www.facebook.com/ArackamannilPrinters?sfnsn=wa" target="_blank" rel="noopener noreferrer">
                                                    <FaFacebookF className="landing-icon" />
                                                </a>

                                            </div>
                                        </motion.div>
                                    </div>
                                </section>
                                <section id='about-us'>
                                    <AboutUs />
                                </section>
                                <OurServices />
                                {/* <section id='projects'>
                                    <ProjectSection />
                                </section> */}
                                {/* <section id='workflow'>
                                    <OurWorkFlow />
                                </section> */}
                                <section id='reviews'>
                                    <CustomerReviews />
                                </section>
                                <section id='contact'>
                                    <ContactLandingSection />
                                </section>
                                <section id='footer'>
                                    <Footer />
                                </section>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showPopup && (
                    <ContactPopup onClose={() => setShowPopup(false)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default LandingPage;
