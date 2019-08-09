import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'
import TastingsStyle from'./tastings.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import MainBkgd from '../images/main-background.png'

const ChefsDinnerPage = () => {
    return (
        <Layout>
            <Head title="Tastings With Appetizers" />
            <div className="row">
                <Col lg={6} md={12} className={TastingsStyle.mainSection}>
                    <h1 className={TastingsStyle.mainTitleBold}>Discover Our Tastings</h1>
                    <h1 className={TastingsStyle.mainSectionTitle}>Chef's Dinner</h1>
                    <p className={TastingsStyle.mainText}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                    <p className={TastingsStyle.price}>$100/person (minimum 4 People)</p>
                    <AniLink swipe direction="up" entryOffset={100} to="/" className={TastingsStyle.btn}>BOOK NOW</AniLink>
                    <AniLink swipe direction="right" entryOffset={100} to="/tastings-with-appetizers"><FontAwesomeIcon icon={faArrowAltCircleLeft} className={ TastingsStyle.arrowLeftIcon} /></AniLink>
                    <img src={MainBkgd} alt="Glasses of Wine" className={TastingsStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={TastingsStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={TastingsStyle.rightTopImg}></Col>
                        <Col md={8} className={TastingsStyle.rightTopText}>
                            <h1 className="text-center">Basic Tasting</h1>
                            <p className={TastingsStyle.rightTopDescription}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <p className={TastingsStyle.price}>$20/person (minimum 4 People)</p>
                            <AniLink swipe direction="up" entryOffset={100} to="/" className={TastingsStyle.btn}>BOOK NOW</AniLink>
                        </Col>
                    </div>
                    <div className={TastingsStyle.rightBottomRow}>
                        <Col md={12} className={TastingsStyle.rightBottomSection}>
                            <h1 className="text-center">Tastings with Appetizers</h1>
                            <p className={TastingsStyle.rightBottomDescription}>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <p className={TastingsStyle.price}>$40/person (minimum 4 People)</p>
                            <AniLink swipe direction="up" entryOffset={100} to="/" className={TastingsStyle.btn}>BOOK NOW</AniLink>
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default ChefsDinnerPage
