import React from "react"
import { Col } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'
import MissionSlider from "../components/mission-slider"
import MissionRightTop from "../components/mission-right-top"
import MissionRightBottom from "../components/mission-right-bottom"
import "../styles/global.css"
import MainBkgd from '../images/main-background.png'


const MissionPage = () => {
    return (
        <Layout>
            <Head title="Mission" />
            <div className="row">
                <Col lg={6} md={12} className="main-section">
                    <MissionSlider />
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


