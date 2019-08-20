import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import TastingsStyle from'./tastings.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import MainBkgd from '../images/main-background.png'

const WithAppiPage = ({data}) => {
    return (
        <Layout>
            <Head title="Tastings With Appetizers" />
            <div className="row">
                <Col lg={6} md={12} className={TastingsStyle.mainSection}>
                    <h1 className={TastingsStyle.mainTitleBold}>Discover Our Tastings</h1>
                    <h1 className={TastingsStyle.mainSectionTitle}>{data.wordpressWpTasting.acf.subtitle2}</h1>
                    <p className={TastingsStyle.mainText}>{data.wordpressWpTasting.acf.subcontent2}</p>
                    <p className={TastingsStyle.price}>{data.wordpressWpTasting.acf.price2}</p>
                    {/*Calendly*/}
                    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
                    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
                    <a className={TastingsStyle.btn} href="https://calendly.com/elevateloscabos/las-uvas-wine-tasting"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/elevateloscabos/las-uvas-wine-tasting'});return false;">Book Now</a>
                    {/*Calendly*/}
                    <AniLink swipe direction="right" entryOffset={100} to="/tastings"><FontAwesomeIcon icon={faArrowAltCircleLeft} className={ TastingsStyle.arrowLeftIcon} /></AniLink>
                    <AniLink swipe direction="left" entryOffset={100} to="/chefs-dinner"><FontAwesomeIcon icon={faArrowAltCircleRight} className={ TastingsStyle.arrowRightIcon} /></AniLink>
                    <img src={MainBkgd} alt="Glasses of Wine" className={TastingsStyle.mainBkgd} />
                </Col>
            </div>
        </Layout>
    )
}

export default WithAppiPage


export const query = graphql`
query TastingAppiPage {
    wordpressWpTasting {
        acf {
            subtitle2
            subcontent2
            price2
        }
    }
}
`