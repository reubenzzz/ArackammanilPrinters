import React from "react";
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import "./CustomerReviews.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
    {
        name: "Alen Alex",
        location: "Kakkanad, Kerala",
        content:
            "Arackamannil Printers handled our business brochure printing, and the quality was top-notch. The colors were vibrant, and the finish was exactly what we envisioned. Highly recommended for professional print needs!",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748751402/3d-rendering-luxury-modern-living-room-with-fabric-sofa_uglzwv.jpg"
    },
    {
        name: "Nivin Paul",
        location: "Ernakulam, Kerala",
        content:
            "I approached Arackamannil Printers for wedding invitation cards, and they exceeded expectations. The design, texture, and timely delivery were all perfect. Great attention to detail!",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748700336/2_xyjpcn.png"
    },
    {
        name: "Sambath",
        location: "Vyttila, Kerala",
        content:
            "We printed promotional flex boards and visiting cards through Arackamannil Printers. The service was fast, the quality unmatched, and they were very responsive throughout the process.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2185_i2bhiw.jpg"
    },
    {
        name: "Akash",
        location: "Thrissur, Kerala",
        content:
            "Their team helped us with complete branding material for our new store — from logo design to banners and packaging labels. Everything looked sharp and professional. Would definitely return!",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748751683/modern-minimalist-office_2_xxopco.jpg"
    },
    {
        name: "Anu",
        location: "Calicut, Kerala",
        content:
            "I needed a custom diary and calendar printing for our company. Arackamannil Printers delivered premium quality prints at a great price. Their service is reliable and efficient.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2204_xm1wvh.jpg"
    },
    {
        name: "Sreedevi",
        location: "Alappuzha, Kerala",
        content:
            "From digital prints to large-scale flex printing, Arackamannil Printers has been our go-to partner. Their consistency in quality and customer support makes them stand out.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1748697879/IMG_2195_x9p40b.jpg"
    }
];



// Split reviews into chunks of 3 for desktop carousel
const desktopReviews = [];
for (let i = 0; i < reviews.length; i += 3) {
    desktopReviews.push(reviews.slice(i, i + 3));
}

export default function CustomerReviews() {
    return (
        <section className="reviews-section">
            <MDBContainer className="py-0">
                <div className="our-services-header">
                    <div className='our-service-title'>
                        <h2>What Our Clients Say<br />About Us</h2><div className="our-service-line-heading" />
                    </div>
                    <div className="about-us-line-container">
                        <div className="about-us-line" />
                        <span className="about-us-subtitle">CUSTOMER REVIEWS</span>
                    </div>

                </div>

                {/* <p className="section-description">
                    Discover why clients trust us to transform their spaces into extraordinary environments
                </p> */}
                {/* Desktop Carousel (3 reviews per slide) */}
                <div className="d-none d-lg-block">
                    <MDBCarousel
                        showControls={false}
                        showIndicators={false}
                        interval={3000}
                        ride="carousel"
                        className="reviews-carousel"
                    >
                        {desktopReviews.map((reviewGroup, index) => (
                            <MDBCarouselItem key={index} className={index === 0 ? "active" : ""}>
                                <MDBRow>
                                    {reviewGroup.map((review, idx) => (
                                        <MDBCol lg="4" key={idx} className="mb-4 mb-lg-0">
                                            <ReviewCard review={review} />
                                        </MDBCol>
                                    ))}
                                </MDBRow>
                            </MDBCarouselItem>
                        ))}

                    </MDBCarousel>
                    {/* <button className="custom-arrow left" >
                        <FaChevronLeft />
                    </button>
                    <button className="custom-arrow right" >
                        <FaChevronRight />
                    </button> */}

                </div>

                {/* Mobile Carousel (1 review per slide) */}
                <div className="d-lg-none">
                    <MDBCarousel
                        showControls={false}
                        showIndicators={false}
                        interval={3000}
                        ride="carousel"
                        className="reviews-carousel"
                    >
                        {reviews.map((review, index) => (
                            <MDBCarouselItem key={index} className={index === 0 ? "active" : ""}>
                                <MDBRow className="justify-content-center">
                                    <MDBCol sm="10" md="8">
                                        <ReviewCard review={review} />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCarouselItem>
                        ))}
                    </MDBCarousel>
                    {/* <button className="custom-arrow left" >
                        <MDBIcon fas icon="chevron-left" />
                    </button>
                    <button className="custom-arrow right" >
                        <MDBIcon fas icon="chevron-right" />
                    </button> */}
                </div>

            </MDBContainer>
        </section>
    );
}

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <div className="review-header">
                <img
                    src={review.avatar}
                    className="review-avatar"
                    alt={review.name}
                />
                <div className="review-titles">
                    <h5 className="review-name">{review.name}</h5>
                    <h6 className="review-role">{review.location}</h6>
                </div>
            </div>

            <div className="review-content">
                <div className="review-line"></div>
                <div className="review-text">
                    <MDBIcon fas icon="quote-left" className="quote-icon" />
                    <p>{review.content}</p>
                </div>
            </div>

            <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                    <MDBIcon key={i} fas icon="star" className="star-icon" />
                ))}
            </div>
        </div>
    );
};