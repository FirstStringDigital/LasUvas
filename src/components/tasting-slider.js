import React, { Component } from "react";
import BasicTasting from "../components/basic-tasting"
import MidTasting from "../components/mid-tasting"
import ChefsDinner from "../components/chefs-dinner"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.css"

export default class TastingSlider extends Component {
  render() {
    
    return (
      <div>
        <Slider className="tasting-slider"
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        swipeToSlide={true}
        >
          <div>
              <BasicTasting />
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
