import React, { Component } from "react";
import MissionMain from "../components/mission-main"
import Faqs from "../components/faqs"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.css"
import MissionStyle from "../styles/mission.module.scss"

export default class MissionSliderDesktop extends Component {
  render() {
    
    return (
      <div className={MissionStyle.sliderDesktop}>
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
