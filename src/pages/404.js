import React from "react"
import { Col } from 'react-bootstrap'
import { Link } from "gatsby"
import Layout from '../components/layout'
import FourOFourMain from "../components/404-main"
import "../styles/global.css"
import MainBkgd from '../images/main-background.png'
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
              <h1 className="text-center">Our Pages</h1>
              <Link to="/tastings" className="btn">TASTINGS PAGE</Link><br />
              <Link to="/mission" className="btn">MISSION/FAQ PAGE</Link><br />
              <Link to="/vlog" className="btn">VLOG</Link><br />
              <Link to="/testimonials" className="btn">TESTIMONIALS PAGE</Link>
            </Col>
          </div>
          <div className="right-bottom-row">
            <Col md={12} className="right-bottom-section">
            </Col>
          </div>
        </Col>
      </div>
    </Layout>
  )
}

export default NotFoundPage
