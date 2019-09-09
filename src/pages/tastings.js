import React from "react"
import { Col } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'
import TastingSlider from "../components/tasting-slider"
import MidTasting from "../components/mid-tasting"
import ChefsDinner from "../components/chefs-dinner"
import TastingsStyle from'../styles/tastings.module.scss'
import MainBkgd from '../images/main-background.png'

const TastingsPage = () => {
    return (
        <Layout>
            <Head title="Tastings" />
            <div className="row">
                <Col lg={6} md={12} className={TastingsStyle.mainSection}>
                <h1 className={TastingsStyle.mainTitleBold}>Discover Our Tastings</h1>
                    <TastingSlider />
                    <img src={MainBkgd} alt="Glasses of Wine" className={TastingsStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={TastingsStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={TastingsStyle.rightTopImg}></Col>
                        <Col md={8} className={TastingsStyle.rightTopText}>
                            <MidTasting />
                        </Col>
                    </div>
                    <div className={TastingsStyle.rightBottomRow}>
                        <Col md={12} className={TastingsStyle.rightBottomSection}>
                            <ChefsDinner />
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default TastingsPage