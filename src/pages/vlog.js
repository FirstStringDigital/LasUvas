import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import VlogStyle from'./vlog.module.scss'
import { Col } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MainBkgd from '../images/main-background.png'
import Video from '../components/video'

const VlogPage = ({data}) => {
    return (
        <Layout>
            <Head title="Friday Night With The Kims" />
            <div className="row">
                <Col lg={6} md={12} className={VlogStyle.mainSection}>
                    <h1 className={VlogStyle.mainTitleBold}>Vlog</h1>
                    <h1 className={VlogStyle.mainSectionTitle}>Friday Night With The Kims</h1>
                    {/*Video Content here */}
                    <div className={VlogStyle.videoSection}>{data.allWordpressPost.edges.map(document => (
                        <li key={document.node.id}>
                            <Video videoSrcURL={document.node.acf.youtubeurl} videoTitle="Featured Video"/>
                        </li>
                    ))}
                        {/* End Video Content */}
                    </div>
                    <img src={MainBkgd} alt="Glasses of Wine" className={VlogStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={VlogStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={VlogStyle.rightTopImg}></Col>
                        <Col md={8} className={VlogStyle.rightTopText}>
                            <h1 className="text-center">Our Tastings</h1>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <AniLink swipe direction="up" entryOffset={100} to="/tastings" className={VlogStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                        </Col>
                    </div>
                    <div className={VlogStyle.rightBottomRow}>
                        <Col md={12} className={VlogStyle.rightBottomSection}>
                            <h1 className="text-center">Our Mission</h1>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <AniLink swipe direction="up" entryOffset={100} to="/mission" className={VlogStyle.btn}>LEARN MORE</AniLink>
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
