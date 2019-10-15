import React from "react"
import { Col } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from "../components/seo"
import MissionSliderDesktop from "../components/mission-slider-desktop"
import MissionSliderMobile from "../components/mission-slider-mobile"
import MissionRightTop from "../components/mission-right-top"
import MissionRightBottom from "../components/mission-right-bottom"
import "../styles/global.css"
import MainBkgd from '../images/main-background.png'

const MissionPage = () => {
    return (
        <Layout>
            <SEO title="Our Mission" />
            <div className="row mission-page">
                <Col lg={6} md={12} className="main-section">
                    <MissionSliderDesktop />
                    <MissionSliderMobile />
                    <img src={MainBkgd} alt="Glasses of Wine" className="main-bkgd" />
                </Col>
                <Col lg={6} md={0} className="right-section">
                    <div className="row">
                        <Col md={4} className="right-top-img"></Col>
                        <Col md={8} className="right-top-text">
                            <MissionRightTop />
                        </Col>
                    </div>
                    <div className="right-bottom-row">
                        <Col md={12} className="right-bottom-section">
                            <MissionRightBottom />
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default MissionPage


