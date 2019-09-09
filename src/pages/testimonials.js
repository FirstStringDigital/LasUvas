import React from "react"
import { Col } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'
import Testimonials from "../components/testimonials-component"
import OurTastings from "../components/our-tastings"
import OurMission from "../components/our-mission"
import TestimonialsStyle from'../styles/testimonials.module.scss'
import MainBkgd from '../images/main-background.png'

const TestimonialsPage = () => {
    return (
        <Layout>
            <Head title="Testimonials" />
            <div className="row">
                <Col lg={6} md={12} className={TestimonialsStyle.mainSection}>
                    <h1 className={TestimonialsStyle.mainTitleBold}>Testimonials</h1>
                    <h1 className={TestimonialsStyle.mainSectionTitle}>Getting Some Props</h1>
                    <Testimonials />
                    <img src={MainBkgd} alt="Glasses of Wine" className={TestimonialsStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={TestimonialsStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={TestimonialsStyle.rightTopImg}></Col>
                        <Col md={8} className={TestimonialsStyle.rightTopText}>
                            <OurTastings />
                        </Col>
                    </div>
                    <div className={TestimonialsStyle.rightBottomRow}>
                        <Col md={12} className={TestimonialsStyle.rightBottomSection}>
                        <OurMission />    
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default TestimonialsPage
