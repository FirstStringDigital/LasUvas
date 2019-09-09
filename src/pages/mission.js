import React from "react"
import { Col } from 'react-bootstrap'
import Layout from '../components/layout'
import Head from '../components/head'
import MissionSlider from "../components/mission-slider"
import MissionRightTop from "../components/mission-right-top"
import MissionRightBottom from "../components/mission-right-bottom"
import MissionStyle from'../styles/mission.module.scss'
import MainBkgd from '../images/main-background.png'


const MissionPage = () => {
    return (
        <Layout>
            <Head title="Mission" />
            <div className="row">
                <Col lg={6} md={12} className={MissionStyle.mainSection}>
                    <MissionSlider />
                    <img src={MainBkgd} alt="Glasses of Wine" className={MissionStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={MissionStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={MissionStyle.rightTopImg}></Col>
                        <Col md={8} className={MissionStyle.rightTopText}>
                            <MissionRightTop />
                        </Col>
                    </div>
                    <div className={MissionStyle.rightBottomRow}>
                        <Col md={12} className={MissionStyle.rightBottomSection}>
                            <MissionRightBottom />
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default MissionPage


