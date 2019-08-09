import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import IndexStyle from'./index.module.scss'
import { Col } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MainLogo from '../images/las_uvas_logo.png'
import MainBkgd from '../images/main-background.png'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <div className="row">
                <Col lg={6} md={12} className={IndexStyle.mainSection}>
                    <img src={MainLogo} alt="Las Uvas Logo" className={IndexStyle.mainLogo} />
                    <p className={IndexStyle.mainText}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                    <div className={IndexStyle.mobileBtn}>
                        <AniLink swipe direction="right" entryOffset={100} to="/mission" className={IndexStyle.btn}>OUR MISSION</AniLink>
                        <AniLink swipe direction="left" entryOffset={100} to="/tastings" className={IndexStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                    </div>
                    <img src={MainBkgd} alt="Glasses of Wine" className={IndexStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={IndexStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={IndexStyle.rightTopImg}></Col>
                        <Col md={8} className={IndexStyle.rightTopText}>
                            <h1 className="text-center">Our Tastings</h1>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <AniLink swipe direction="up" entryOffset={100} to="/tastings" className={IndexStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                        </Col>
                    </div>
                    <div className={IndexStyle.rightBottomRow}>
                        <Col md={12} className={IndexStyle.rightBottomSection}>
                            <h1 className="text-center">Our Mission</h1>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <AniLink swipe direction="up" entryOffset={100} to="/mission" className={IndexStyle.btn}>LEARN MORE</AniLink>
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default IndexPage
