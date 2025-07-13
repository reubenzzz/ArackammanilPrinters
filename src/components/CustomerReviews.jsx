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
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const reviews = [
    {
        name: "Vyshu The Vaishnav",
        content: "The one an only printing centre which prints there own logo and company name bigger than the design of custom . Then we ask they say this is the way we print",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1752413465/user_i2grkc.png",
        rating: 5
    },
    {
        name: "Dijo Jose",
        content: "This shop is ideal for all your printing needs preferably bigprinting works. And I felt theirrates to be really affordable. The quality is really awesome.The staff is really systematic and professional in their approach.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1752413465/user_i2grkc.png",
        rating: 5
    },
    {
        name: "Midhun Babu",
        content: "I got surprised by the energy of the shop owner. He deserve more as he is perfect in his profession. He cares everyone inside the shop including his staff. Printing quality is not that good even though the owner was awesome",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1752413465/user_i2grkc.png",
        rating: 4
    },
    {
        name: "Bibin K S",
        content: "Good place for printing...Flex printing, Colour laser printing, and offset printing...Nice behaviour and fast service",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1752413465/user_i2grkc.png",
        rating: 4
    },
    {
        name: "Anu Koshi Talks",
        content: "Good place for printing...Flex printing, Colour laser printing, and offset printing...Nice behaviour and fast service",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1752413465/user_i2grkc.png",
        rating: 5
    },
    {
        name: "Mathew Thomas 70303",
        location: "Alappuzha, Kerala",
        content: "All sorts of Flex Printing and Posters are available all time prior to your request.",
        avatar: "https://res.cloudinary.com/dpo91btlc/image/upload/v1752413465/user_i2grkc.png",
        rating: 4
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
                    <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={`star-icon ${i < review.rating ? 'filled' : 'empty'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="review-content">
                <div className="review-line"></div>
                <div className="review-text">
                    <MDBIcon fas icon="quote-left" className="quote-icon" />
                    <p>{review.content}</p>
                </div>
            </div>



        </div>
    );
};