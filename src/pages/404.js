import React from "react"
import { Col } from "react-bootstrap"
import Layout from "../components/layout"
import FourOFourMain from "../components/404-main"
import OurTastings from "../components/our-tastings"
import OurMission from "../components/our-mission"
import "../styles/global.css"
import MainBkgd from "../images/main-background.png"
//import SEO from "../components/seo" - removed as I ddin't seem need. If we think it is I grabbed this code from ELC blog file which was based
// off the Gatsby Starter Default template

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="row">
        <Col lg={6} md={12} className="main-section">
          <FourOFourMain />
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

export default NotFoundPage
