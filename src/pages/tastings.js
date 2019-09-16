import React from "react"
import { Col } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TastingSlider from "../components/tasting-slider"
import BasicTastingDesktop from "../components/basic-tasting-desktop"
import MidTasting from "../components/mid-tasting"
import ChefsDinner from "../components/chefs-dinner"
import "../styles/global.css"
import MainBkgd from "../images/main-background.png"

const TastingsPage = () => {
  return (
    <Layout>
      <SEO title="Tastings" />
      <div className="row">
        <Col lg={6} md={12} className="main-section">
          <BasicTastingDesktop />
          <TastingSlider />
          <img src={MainBkgd} alt="Glasses of Wine" className="main-bkgd" />
        </Col>
        <Col lg={6} md={0} className="right-section">
          <div className="row">
            <Col md={4} className="right-top-img"></Col>
            <Col md={8} className="right-top-text">
              <MidTasting />
            </Col>
          </div>
          <div className="right-bottom-row">
            <Col md={12} className="right-bottom-section">
              <ChefsDinner />
            </Col>
          </div>
        </Col>
      </div>
    </Layout>
  )
}

export default TastingsPage
