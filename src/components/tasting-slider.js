import React, { Component } from "react";
import BasicTastingMobile from "./basic-tasting-mobile"
import MidTasting from "../components/mid-tasting"
import ChefsDinner from "../components/chefs-dinner"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.css"
import TastingStyle from "../styles/tasting.module.scss"

export default class TastingSlider extends Component {
  render() {
    
    return (
      <div className={TastingStyle.tastingSliderMobile}>
        <Slider className="tasting-slider"
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        swipeToSlide={true}
        >
          <div>
              <BasicTastingMobile />
          </div>
          <div>
              <MidTasting />
          </div>
          <div>
              <ChefsDinner />
          </div>
        </Slider>
      </div>
    );
  }
}
