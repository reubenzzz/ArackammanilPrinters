import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Category.css";

// Dummy printing categories
const categories = [
  { slug: "visitingcards", name: "Visiting Cards", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769618/Visiting_Card_jqaega.png" },
  { slug: "posters", name: "Posters", image: "https://source.unsplash.com/400x300/?poster,print" },
  { slug: "brochures", name: "Brochures", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768287/Brochure_kbhxur.png" },
  { slug: "banners", name: "Banners", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757765919/Flex_u1grrc.png" },
  { slug: "Box", name: "Box", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767611/Box_Design_cw5h9k.png" },
  { slug: "TshirtsJersy", name: "Tshirts & Jersy", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757767428/Tshirt_vnpcoe.jpg" },
  { slug: "brochures", name: "Brochures", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768287/Brochure_kbhxur.png" },
  { slug: "banners", name: "Banners", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757765919/Flex_u1grrc.png" },
  { slug: "visitingcards", name: "Visiting Cards", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757769618/Visiting_Card_jqaega.png" },
  { slug: "posters", name: "Posters", image: "https://source.unsplash.com/400x300/?poster,print" },
  { slug: "brochures", name: "Brochures", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768287/Brochure_kbhxur.png" },
  { slug: "banners", name: "Banners", image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757765919/Flex_u1grrc.png" },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Category = () => {
  return (
    <div className="category-container">
      <motion.div
        className="category-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Explore Our Printing Categories</h2>
        <div className="category-line" />
      </motion.div>

      <motion.div
        className="category-grid"
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="category-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <Link to={`/category/${cat.slug}`} className="btn-secondary">
              Know More →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Category;
