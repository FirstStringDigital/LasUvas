import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import Vlog from "../components/vlog-component"
import OurTastings from "../components/our-tastings"
import OurMission from "../components/our-mission"
import "../styles/global.css"
import { Col } from 'react-bootstrap'
import MainBkgd from '../images/main-background.png'

const VlogPage = ({data}) => {
    return (
        <Layout>
            <Head title="Friday Night With The Kims" />
            <div className="row">
                <Col lg={6} md={12} className="main-section">
                    <h1 className="main-title-bold">Vlog</h1>
                    <h1 className="main-section-title">Friday Night With The Kims</h1>
                    {/*Video Content here */}
                    <Vlog />
                    {/* End Video Content */}
                    <img src={MainBkgd} alt="Glasses of Wine" className="main-bkgd" />
                </Col>
                <Col lg={6} md={0} className="right-section">
                    <div className="row">
                        <Col md={4} className="right-top-img"></Col>
                        <Col md={8} className="right-top-text">
                            <OurTastings />
                        </Col>
                    </div>
                    <div className="right-bottom-row">
                        <Col md={12} className="right-bottom-section">
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
