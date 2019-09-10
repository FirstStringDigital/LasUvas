import React, { Component } from "react";
import MissionMain from "./mission-main"
import MissionRightTop from "./mission-right-top"
import MissionRightBottom from "./mission-right-bottom"
import Faqs from "./faqs"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.css"
import MissionStyle from "../styles/mission.module.scss"

export default class MissionSliderMobile extends Component {
  render() {
    
    return (
      <div className={MissionStyle.sliderMobile}>
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
              <MissionRightBottom />
          </div>
          <div>
              <Faqs/>
          </div>
          <div>
              <MissionRightTop />
          </div>
        </Slider>
      </div>
    );
  }
}
