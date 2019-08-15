import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import MissionStyle from'./mission.module.scss'
import { Col } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MainBkgd from '../images/main-background.png'

const MissionPage = ({data}) => {
    return (
        <Layout>
            <Head title="Mission" />
            <div className="row">
                <Col lg={6} md={12} className={MissionStyle.mainSection}>
                    <h1 className={MissionStyle.mainTitleBold}>Our Mission</h1>
                    <h1 className={MissionStyle.mainSectionTitle}>{data.wordpressWpMission.acf.subtitle}</h1>
                    <p className={MissionStyle.mainText}>{data.wordpressWpMission.acf.subcontent}</p>
                    <div className={MissionStyle.mobileText}>
                        <h1 className="text-center">{data.wordpressWpMission.acf.subtitle2}</h1>
                        <p>{data.wordpressWpMission.acf.subcontent2}</p>
                        <h1 className="text-center">{data.wordpressWpMission.acf.subtitle3}}</h1>
                        <p>{data.wordpressWpMission.acf.subcontent3}</p>
                    </div>
                    <AniLink swipe direction="left" entryOffset={100} to="/tastings" className={MissionStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                    <img src={MainBkgd} alt="Glasses of Wine" className={MissionStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={MissionStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={MissionStyle.rightTopImg}></Col>
                        <Col md={8} className={MissionStyle.rightTopText}>
                            <h1 className="text-center">{data.wordpressWpMission.acf.subtitle2}</h1>
                            <p>{data.wordpressWpMission.acf.subcontent2}</p>
                        </Col>
                    </div>
                    <div className={MissionStyle.rightBottomRow}>
                        <Col md={12} className={MissionStyle.rightBottomSection}>
                            <h1 className="text-center">{data.wordpressWpMission.acf.subtitle3}</h1>
                            <p>{data.wordpressWpMission.acf.subcontent3}</p>
                            <AniLink swipe direction="up" entryOffset={100} to="/tastings" className={MissionStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default MissionPage

export const query = graphql`
query MissionPage {
    wordpressWpMission {
        content
        acf {
            subtitle
            subcontent
            subtitle2
            subcontent2
            subtitle3
            subcontent3
        }
    }
}
`


