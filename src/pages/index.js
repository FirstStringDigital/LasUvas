import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import CarouselSlider from '../components/carousel'
import IndexStyle from'./index.module.scss'
import { Col } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MainLogo from '../images/las_uvas_logo.png'
import MainBkgd from '../images/main-background.png'

const IndexPage = ({data}) => {
    return (
        <Layout>
            <Head title="Home" />
            <div className="row">
                <Col lg={6} md={12} className={IndexStyle.mainSection}>
                    <img src={MainLogo} alt="Las Uvas Logo" className={IndexStyle.mainLogo} />
                    <p className={IndexStyle.mainText}>{data.wordpressWpHome.acf.content}</p>
                    {/* START Carousel */}
                    <div>
                    <CarouselSlider />
                    </div>
                    {/* END Carousel */}
                    <img src={MainBkgd} alt="Glasses of Wine" className={IndexStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={IndexStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={IndexStyle.rightTopImg}></Col>
                        <Col md={8} className={IndexStyle.rightTopText}>
                            <h1 className="text-center">Our Tastings</h1>
                            <p>{data.wordpressWpHome.acf.subcontent}</p>
                            <AniLink swipe direction="up" entryOffset={100} to="/tastings" className={IndexStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                        </Col>
                    </div>
                    <div className={IndexStyle.rightBottomRow}>
                        <Col md={12} className={IndexStyle.rightBottomSection}>
                            <h1 className="text-center">Our Mission</h1>
                            <p>{data.wordpressWpHome.acf.subcontent2}</p>
                            <AniLink swipe direction="up" entryOffset={100} to="/mission" className={IndexStyle.btn}>LEARN MORE</AniLink>
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default IndexPage


export const query = graphql`
query HomePage {
    wordpressWpHome {
        content
        acf {
            content
            subtitle
            subcontent
            subtitle2
            subcontent2
        }
    }
}
`
