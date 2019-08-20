import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import TastingsStyle from'./tastings.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import MainBkgd from '../images/main-background.png'
import Calendly from '../components/calendly'

const TastingsPage = ({data}) => {
    return (
        <Layout>
            <Head title="Tastings" />
            <div className="row">
                <Col lg={6} md={12} className={TastingsStyle.mainSection}>
                    <h1 className={TastingsStyle.mainTitleBold}>Discover Our Tastings</h1>
                    <h1 className={TastingsStyle.mainSectionTitle}>{data.wordpressWpTasting.acf.subtitle}</h1>
                    <p className={TastingsStyle.mainText}>{data.wordpressWpTasting.acf.subcontent}</p>
                    <p className={TastingsStyle.price}>{data.wordpressWpTasting.acf.price1}</p>
                    {/*Calendly*/}
                    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
                    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
                    <a className={TastingsStyle.btn} href="https://calendly.com/elevateloscabos/las-uvas-wine-tasting"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/elevateloscabos/las-uvas-wine-tasting'});return false;">Book Now</a>
                    {/*Calendly*/}
                    <AniLink swipe direction="left" entryOffset={100} to="/tastings-with-appetizers"><FontAwesomeIcon icon={faArrowAltCircleRight} className={ TastingsStyle.arrowRightIcon} /></AniLink>
                    <img src={MainBkgd} alt="Glasses of Wine" className={TastingsStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={TastingsStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={TastingsStyle.rightTopImg}></Col>
                        <Col md={8} className={TastingsStyle.rightTopText}>
                            <h1 className="text-center">{data.wordpressWpTasting.acf.subtitle2}</h1>
                            <p className={TastingsStyle.rightTopDescription}>{data.wordpressWpTasting.acf.subcontent2}</p>
                            <p className={TastingsStyle.price}>{data.wordpressWpTasting.acf.price2}</p>
                            {/*<AniLink swipe direction="up" entryOffset={100} to="/" className={TastingsStyle.btn}>BOOK NOW</AniLink>*/}
                            {/*Calendly*/}
                            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
                            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
                            <a className={TastingsStyle.btn} href="https://calendly.com/elevateloscabos/las-uvas-wine-tasting"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/elevateloscabos/las-uvas-wine-tasting'});return false;">Book Now</a>
                            {/*Calendly*/}
                        </Col>
                    </div>
                    <div className={TastingsStyle.rightBottomRow}>
                        <Col md={12} className={TastingsStyle.rightBottomSection}>
                            <h1 className="text-center">{data.wordpressWpTasting.acf.subtitle3}</h1>
                            <p className={TastingsStyle.rightBottomDescription}>{data.wordpressWpTasting.acf.subcontent3}</p>
                            <p className={TastingsStyle.price}>{data.wordpressWpTasting.acf.price3}</p>
                            {/*Calendly*/}
                            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
                            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
                            <a className={TastingsStyle.btn} href="https://calendly.com/elevateloscabos/las-uvas-wine-tasting"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/elevateloscabos/las-uvas-wine-tasting'});return false;">Book Now</a>
                            {/*Calendly*/}
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default TastingsPage

export const query = graphql`
query TastingPage {
    wordpressWpTasting {
        acf {
            subtitle
            subcontent
            subtitle2
            subcontent2
            subtitle3
            subcontent3
            price1
            price2
            price3
        }
    }
}
`