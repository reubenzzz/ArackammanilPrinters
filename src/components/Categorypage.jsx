import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import "./Category.css";

const categoryData = {
  visitingcards: {
    title: "Visiting Cards",
    description: "Premium quality visiting cards with customizable designs, glossy/matte finish, and fast delivery.",
    image: "https://res.cloudinary.com/dfcgc3m1s/image/upload/v1757768287/Brochure_kbhxur.png",
  },
  posters: {
    title: "Posters",
    description: "High-resolution posters for events, advertisements, and branding. Choose from A3, A2, or custom sizes.",
    image: "https://source.unsplash.com/1200x500/?poster,print",
  },
  brochures: {
    title: "Brochures",
    description: "Attractive brochures that showcase your products and services with professional layouts.",
    image: "https://source.unsplash.com/1200x500/?brochure,design",
  },
  banners: {
    title: "Banners",
    description: "Eye-catching banners for events, promotions, and outdoor advertisements.",
    image: "https://source.unsplash.com/1200x500/?banner,advertisement",
  },
  Box: {
    title: "Box",
    description: "Eye-catching banners for events, promotions, and outdoor advertisements.",
    image: "https://source.unsplash.com/1200x500/?banner,advertisement",
  },
  TshirtsJersy: {
    title: "Tshirt & Jersy",
    description: "Eye-catching banners for events, promotions, and outdoor advertisements.",
    image: "https://source.unsplash.com/1200x500/?banner,advertisement",
  },
  banners: {
    title: "Banners",
    description: "Eye-catching banners for events, promotions, and outdoor advertisements.",
    image: "https://source.unsplash.com/1200x500/?banner,advertisement",
  },
  banners: {
    title: "Banners",
    description: "Eye-catching banners for events, promotions, and outdoor advertisements.",
    image: "https://source.unsplash.com/1200x500/?banner,advertisement",
  },
};

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categoryData[slug];

  if (!category) {
    return (
      <motion.div
        className="not-found"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2>Category Not Found</h2>
        <Link to="/category" className="btn-secondary">
          ← Back to Categories
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="category-layout">
      {/* Sidebar */}
      <motion.aside
        className="sidebar"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3>All Categories</h3>
        <ul>
          {Object.keys(categoryData).map((key) => (
            <li key={key}>
              <Link to={`/category/${key}`} className={slug === key ? "active" : ""}>
                {categoryData[key].title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.aside>

      {/* Main Content */}
      <motion.main
        className="category-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="category-hero"
          style={{ backgroundImage: `url(${category.image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="overlay" />
          <div className="hero-text">
            <h1>{category.title}</h1>
            <p>{category.description}</p>
            <Link to="/contact-us" className="btn-primary">
              Get a Quote →
            </Link>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default CategoryPage;
