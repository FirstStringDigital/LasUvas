import React from "react"
import { Col } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'
import HomeMain from "../components/index-main"
import HomeSlider from '../components/carousel'
import OurTastings from "../components/our-tastings"
import OurMission from "../components/our-mission"
import IndexStyle from "../styles/index.module.scss"
import MainBkgd from '../images/main-background.png'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <div className="row">
                <Col lg={6} md={12} className={IndexStyle.mainSection}>
                    <HomeMain />
                    <div>
                    <HomeSlider />
                    </div>
                    <img src={MainBkgd} alt="Glasses of Wine" className={IndexStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={IndexStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={IndexStyle.rightTopImg}></Col>
                        <Col md={8} className={IndexStyle.rightTopText}>
                            <OurTastings />
                        </Col>
                    </div>
                    <div className={IndexStyle.rightBottomRow}>
                        <Col md={12} className={IndexStyle.rightBottomSection}>
                            <OurMission />
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default IndexPage
