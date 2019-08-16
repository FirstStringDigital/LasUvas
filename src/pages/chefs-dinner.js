import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import TastingsStyle from'./tastings.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import MainBkgd from '../images/main-background.png'

const ChefsDinnerPage = ({data}) => {
    return (
        <Layout>
            <Head title="Tastings With Appetizers" />
            <div className="row">
                <Col lg={6} md={12} className={TastingsStyle.mainSection}>
                    <h1 className={TastingsStyle.mainTitleBold}>Discover Our Tastings</h1>
                    <h1 className={TastingsStyle.mainSectionTitle}>{data.wordpressWpTasting.acf.subtitle3}</h1>
                    <p className={TastingsStyle.mainText}>{data.wordpressWpTasting.acf.subcontent3}</p>
                    <p className={TastingsStyle.price}>{data.wordpressWpTasting.acf.price3}</p>
                    <AniLink swipe direction="up" entryOffset={100} to="/" className={TastingsStyle.btn}>BOOK NOW</AniLink>
                    <AniLink swipe direction="right" entryOffset={100} to="/tastings-with-appetizers"><FontAwesomeIcon icon={faArrowAltCircleLeft} className={TastingsStyle.arrowLeftIcon} /></AniLink>
                    <img src={MainBkgd} alt="Glasses of Wine" className={TastingsStyle.mainBkgd} />
                </Col>
            </div>
        </Layout>
    )
}

export default ChefsDinnerPage


export const query = graphql`
query ChefsTastingPage {
    wordpressWpTasting {
        acf {
            subtitle3
            subcontent3
            price3
        }
    }
}
`