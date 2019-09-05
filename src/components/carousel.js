import React, { Component } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
import Tastings from "../images/tastings.png"
import Mission from "../images/mission.png"
import Vlog from "../images/vlog.png"
import Testimonial from "../images/testimonial.png"
import Faq from "../images/faq.png"

export default class CarouselSlider extends Component {
  render() {
    
    return (
      <div>
        <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={3}
        swipeToSlide={true}
        >
          <AniLink swipe direction="up" entryOffset={100} to="/tastings" className="carousel-item">
            <img src={Tastings} alt="Wine Tasting" className="carousel-img" />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/mission" className="carousel-item">
          <img src={Mission} alt="About Us" className="carousel-img" />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/vlog" className="carousel-item">
          <img src={Vlog} alt="Vlog" className="carousel-img" />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/testimonials" className="carousel-item">
          <img src={Testimonial} alt="Testimonial" className="carousel-img" />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/faqs" className="carousel-item">
          <img src={Faq} alt="FAQ" className="carousel-img" />
          </AniLink>
        </Slider>
      </div>
    );
  }
}
