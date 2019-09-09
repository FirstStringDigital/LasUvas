import React from "react"
import { Col } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'
import Testimonials from "../components/testimonials-component"
import OurTastings from "../components/our-tastings"
import OurMission from "../components/our-mission"
import "../styles/global.css"
import MainBkgd from '../images/main-background.png'

const TestimonialsPage = () => {
    return (
        <Layout>
            <Head title="Testimonials" />
            <div className="row">
                <Col lg={6} md={12} className="main-section">
                    <h1 className="main-title-bold">Testimonials</h1>
                    <h1 className="main-section-title">Getting Some Props</h1>
                    <Testimonials />
                    <img src={MainBkgd} alt="Glasses of Wine" className="main-bkgd" />
                </Col>
                <Col lg={6} md={0} className="right-section">
                    <div className="row">
                        <Col md={4} className="right-top-img"></Col>
                        <Col md={8} className="right-top-text">
                            <OurTastings />
                        </Col>
                    </div>
                    <div className="right-bottom-row">
                        <Col md={12} className="right-bottom-section">
                        <OurMission />    
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default TestimonialsPage
