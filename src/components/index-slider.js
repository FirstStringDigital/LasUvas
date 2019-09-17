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
        <Slider className="index-slider"
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={3}
        swipeToSlide={true}
        >
          <AniLink swipe direction="up" entryOffset={100} to="/tastings" >
            <img src={Tastings} alt="Las Uvas Wine Tasting" className={HomeCarouselStyle.carouselImg} />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/mission" >
          <img src={Mission} alt="Las Uvas Mission" className={HomeCarouselStyle.carouselImg} />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/vlog" >
          <img src={Vlog} alt="Las Uvas Vlog" className={HomeCarouselStyle.carouselImg} />
          </AniLink>
          <AniLink swipe direction="up" entryOffset={100} to="/testimonials" >
          <img src={Testimonial} alt="Las Uvas Testimonial" className={HomeCarouselStyle.carouselImg} />
          </AniLink>
        </Slider>
      </div>
    );
  }
}
