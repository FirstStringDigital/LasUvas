import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import Vlog from "../components/vlog-component"
import OurTastings from "../components/our-tastings"
import OurMission from "../components/our-mission"
import VlogStyle from'../styles/vlog.module.scss'
import { Col } from 'react-bootstrap'
import MainBkgd from '../images/main-background.png'

const VlogPage = ({data}) => {
    return (
        <Layout>
            <Head title="Friday Night With The Kims" />
            <div className="row">
                <Col lg={6} md={12} className={VlogStyle.mainSection}>
                    <h1 className={VlogStyle.mainTitleBold}>Vlog</h1>
                    <h1 className={VlogStyle.mainSectionTitle}>Friday Night With The Kims</h1>
                    {/*Video Content here */}
                    <Vlog />
                    {/* End Video Content */}
                    <img src={MainBkgd} alt="Glasses of Wine" className={VlogStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={VlogStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={VlogStyle.rightTopImg}></Col>
                        <Col md={8} className={VlogStyle.rightTopText}>
                            <OurTastings />
                        </Col>
                    </div>
                    <div className={VlogStyle.rightBottomRow}>
                        <Col md={12} className={VlogStyle.rightBottomSection}>
                            <OurMission />
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default VlogPage

export const pageQuery = graphql`
    query PostQuery {
        allWordpressPost {
            edges {
                node {
                    id
                    acf {
                        youtubeurl
                    }
                }
            }
        }
    }
    `
