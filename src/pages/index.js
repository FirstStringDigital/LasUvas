import React from "react"
import { Col } from 'react-bootstrap'
import Layout from '../components/layout'
import SEO from "../components/seo"
import HomeMain from "../components/index-main"
import IndexSlider from '../components/index-slider'
import OurTastings from "../components/our-tastings"
import OurMission from "../components/our-mission"
import "../styles/global.css"
import MainBkgd from '../images/main-background.png'

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Los Cabos Wine Tasting Experience" />
            <div className="row">
                <Col lg={6} md={12} className="main-section">
                    <HomeMain />
                    <div>
                    <IndexSlider />
                    </div>
                    <img src={MainBkgd} alt="Glasses of Wine" className="main-bkgd" />
                </Col>
                <Col lg={6} md={0} className="right-section">
                    <div className="row">
                        <Col md={4} className="right-top-img"></Col>
                        <Col md={8} className="right-top-text">
                            <OurMission />
                        </Col>
                    </div>
                    <div className="right-bottom-row">
                        <Col md={12} className="right-bottom-section">
                            <OurTastings />
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default IndexPage


