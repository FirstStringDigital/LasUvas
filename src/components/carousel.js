import React, { Component } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCarouselStyle from "../styles/home-carousel.module.scss"
import "../styles/global.css"
import Tastings from "../images/tastings.png"
import Mission from "../images/mission.png"
import Vlog from "../images/vlog.png"
import Testimonial from "../images/testimonial.png"

export default class HomelSlider extends Component {
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
          <AniLink swipe direction="up" entryOffset={100} to="/tastings" >
            <img src={Tastings} alt="Wine Tasting" className={HomeCarouselStyle.carouselImg} />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/mission" >
          <img src={Mission} alt="Mission" className={HomeCarouselStyle.carouselImg} />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/vlog" >
          <img src={Vlog} alt="Vlog" className={HomeCarouselStyle.carouselImg} />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/testimonials" >
          <img src={Testimonial} alt="Testimonial" className={HomeCarouselStyle.carouselImg} />
          </AniLink>
        </Slider>
      </div>
    );
  }
}
