import React, { Component } from "react";
import MissionMain from "../components/mission-main"
import Faqs from "../components/faqs"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.css"

export default class MissionSlider extends Component {
  render() {
    
    return (
      <div>
        <Slider className="mission-slider"
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        swipeToSlide={true}
        >
          <div>
              <MissionMain />
          </div>
          <div>
              <Faqs/>
          </div>
        </Slider>
      </div>
    );
  }
}
