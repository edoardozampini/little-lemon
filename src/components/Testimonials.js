import React from "react";

const Testimonials = () => {
    return (
      <div className="testimonials-parent">
        <h2>Testimonials</h2>
        <div className="testimonials">
            <div className="testimonial">
                <img className="reviewer-img" src="/images/review1.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">Grace Smith</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/review2.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">John Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
            <div className="testimonial">
                <img className="reviewer-img" src="/images/review3.png" alt="greek salad"/>
                <div className="name-rating">
                    <p className="reviewer-name">John Doe</p>
                    <p className="reviewer-rating">5/5</p>
                </div>
                <div className="review-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec massa massa, 
                        semper sed enim at, faucibus mattis lorem. Donec vehicula, leo ut auctor ullamcorper, 
                        diam tortor dignissim velit, ac iaculis libero lacus non diam. </p>
                </div>
            </div>
        </div>
      </div>
    )
  }

export default Testimonials;