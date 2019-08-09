import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import MissionStyle from'./mission.module.scss'
import { Col } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MainBkgd from '../images/main-background.png'

const MissionPage = () => {
    return (
        <Layout>
            <Head title="Mission" />
            <div className="row">
                <Col lg={6} md={12} className={MissionStyle.mainSection}>
                    <h1 className={MissionStyle.mainTitleBold}>Our Mission</h1>
                    <h1 className={MissionStyle.mainSectionTitle}>Mexican Wines</h1>
                    <p className={MissionStyle.mainText}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                    <div className={MissionStyle.mobileText}>
                        <h1 className="text-center">Valle De Guadalupe</h1>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                        <h1 className="text-center">How Does It Compare?</h1>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                    </div>
                    <AniLink swipe direction="left" entryOffset={100} to="/tastings" className={MissionStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                    <img src={MainBkgd} alt="Glasses of Wine" className={MissionStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={MissionStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={MissionStyle.rightTopImg}></Col>
                        <Col md={8} className={MissionStyle.rightTopText}>
                            <h1 className="text-center">Valle De Guadalupe</h1>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                        </Col>
                    </div>
                    <div className={MissionStyle.rightBottomRow}>
                        <Col md={12} className={MissionStyle.rightBottomSection}>
                            <h1 className="text-center">How Does It Compare?</h1>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <AniLink swipe direction="up" entryOffset={100} to="/tastings" className={MissionStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default MissionPage
