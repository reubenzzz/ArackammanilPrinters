// components/ProjectSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './ProjectSection.css'
import { useNavigate } from 'react-router-dom';
const projects = [
    {
        id: 1,
        title: "Modern Living Spaces",
        description: "Minimalist design with warm accents creating a cozy yet sophisticated atmosphere",
        detail: "This residential project in Kakkanad, Kerala, showcases a minimalist design approach enhanced by warm accents, creating a cozy and sophisticated living environment. Spread over 2300 sqft, the space balances simplicity with comfort, emphasizing clean lines, functional layouts, and natural textures. Designed for client Alan Alex, the interiors blend modern aesthetics with homely touches, making every corner inviting and practical. Completed within a month in 2024, this project reflects thoughtful craftsmanship and timeless elegance.",
        category: "residential",
        client: "Alan Alex",
        location: "Kakkanad, Kerala, India",
        duration: "1 Month",
        year: "2024",
        space: "2300 sqft",
        image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2204_xm1wvh.jpg",
        image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2211_ylsviu.jpg",
        image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2209_dxc6nb.jpg",
        image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2194_fs3i3p.jpg",
        image4: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2210_l3cwqc.jpg",
        image5: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2208_w3g3qq.jpg",
        image6: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2204_xm1wvh.jpg",
        image7: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697877/IMG_2206_hhkh0n.jpg",
        image8: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697880/IMG_2189_enezlt.jpg",
        designPhilosophy: "Our approach centers on creating spaces that harmonize form and function. We believe in the power of simplicity, where every element serves a purpose and contributes to the overall aesthetic. from data",
        designPhilosophy1head: "Spatial Harmony",
        designPhilosophy1desc: "Creating balanced proportions and flow between different areas",
        designPhilosophy2head: "Light & Texture",
        designPhilosophy2desc: "Strategic use of natural light and layered textures",
        designPhilosophy3head: "Premium Elegance",
        designPhilosophy3desc: "Creating balanced proportions and flow between different areas",
    },
    {
        id: 2,
        title: "Experion Office Revamp",
        description: "A sleek, modern workspace designed to boost creativity and teamwork.",
        detail: "The Experion Office Revamp is a sleek and modern workspace designed to inspire creativity and collaboration. Spanning 3500 sqft in Infopark Kochi, this project blends functional open layouts with natural light and elegant textures to foster productivity and comfort. Every detail reflects a balance of professionalism and warmth, transforming the office into a dynamic hub for innovation.",
        category: "commercial",
        client: "Experion",
        location: "Infopark, Kochi, Kerala, India",
        duration: "2 Months",
        year: "2024",
        space: "3500 sqft",
        image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699822/3_odtuao.png",
        image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699822/1_vyxceo.png",
        image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699823/4_gwpigk.png",
        image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699822/3_odtuao.png",
        image4: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748699822/2_wxhiug.png",
        designPhilosophy: "A dynamic space that balances style and function to inspire innovation.",
        designPhilosophy1head: "Team Flow",
        designPhilosophy1desc: "Open spaces that spark collaboration.",
        designPhilosophy2head: "Comfort Fit",
        designPhilosophy2desc: "Ergonomic design for all-day ease.",
        designPhilosophy3head: "Vibrant Mood",
        designPhilosophy3desc: "Smart lighting and textures that energize."
    },
    {
        id: 3,
        title: "Cozy Compact Apartment",
        description: "Smart design solutions maximizing comfort and style in a limited space",
        detail: "This compact apartment design transforms limited space into a comfortable and stylish home through clever use of multifunctional furniture and smart storage solutions. Emphasizing natural light and light color palettes, the design creates an open, airy feel that maximizes the perceived space. Clean, modern lines and minimal decor maintain an uncluttered atmosphere, making the apartment both practical and visually appealing for urban living.",
        category: "residential",
        client: "Maya Johnson",
        location: "Bangalore, Karnataka, India",
        duration: "3 Weeks",
        year: "2025",
        space: "650 sqft",
        image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700345/1_wk6rxy.png",
        image1: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/4_gglhmz.png",
        image2: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/3_qu8axr.png",
        image3: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700345/1_wk6rxy.png",
        image4: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/3_qu8axr.png",
        designPhilosophy: "Optimizing every inch with multifunctional furniture and bright, airy design to create an open and welcoming home.",
        designPhilosophy1head: "Space Efficiency",
        designPhilosophy1desc: "Creative storage and furniture layouts to maximize usable space.",
        designPhilosophy2head: "Natural Light",
        designPhilosophy2desc: "Use of light colors and large windows to enhance brightness.",
        designPhilosophy3head: "Modern Minimalism",
        designPhilosophy3desc: "Clean lines and simple decor keeping the space uncluttered.",
        detailedDescription: "This compact apartment project showcases innovative interior design that transforms a small footprint into a stylish and functional home. By incorporating multi-purpose furniture and open layouts, the space feels larger and more inviting. Thoughtful color schemes and abundant natural light create a fresh, airy ambiance perfect for urban living."
    },
];

const ProjectSection = () => {
    const navigate = useNavigate();
    const handleAllProject = () => {
        navigate('/all-project');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' }); // no delay or jank
        }, 0);
    };

    const handleProjectDetail = (project) => {
        navigate('/project-detail', { state: { project } })
    }
    return (
        <section className="project-section">
            <motion.div
                className="project-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="our-services-header-padding">
                    <div className="our-services-header">
                        <div className='our-service-title'>
                            <h2>Spaces We've Transformed</h2>
                            <div className="our-service-line-heading" />
                        </div>
                        <div className="about-us-line-container">
                            <div className="about-us-line" />
                            <span className="about-us-subtitle">OUR PROJECTS</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                    >
                        <div className="card-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="card-image"
                            />
                            <div className="minimal-info">
                                <h3>{project.title}</h3>
                                <div className="project-category">{project.category}</div>
                            </div>
                            <div className="full-overlay">
                                <div className="overlay-content">
                                    <h3>{project.title}</h3>
                                    <div className="project-category">{project.category}</div>
                                    <p>{project.description}</p>
                                    <button className="view-project-btn" onClick={() => handleProjectDetail(project)}>

                                        View Project
                                        <span className="arrow">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <motion.div
                className="project-button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                <button className="view-all-btn" onClick={handleAllProject}>
                    <span>View All Projects</span>
                    <div className="btn-hover-effect"></div>
                </button>
            </motion.div>
        </section>
    );
};

export default ProjectSection;