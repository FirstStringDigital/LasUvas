import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'
import TestimonialsStyle from'./testimonials.module.scss'
import { Col } from 'react-bootstrap'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MainBkgd from '../images/main-background.png'

const TestimonialsPage = ({data}) => {
    return (
        <Layout>
            <Head title="Testimonials" />
            <div className="row">
                <Col lg={6} md={12} className={TestimonialsStyle.mainSection}>
                    <h1 className={TestimonialsStyle.mainTitleBold}>Testimonials</h1>
                    <h1 className={TestimonialsStyle.mainSectionTitle}>Getting Some Props</h1>
                    {/* Testimonial Text */}
                    <div className={TestimonialsStyle.testimonialSection}>
                        {data.allWordpressWpTestimonials.edges.map(document => (
                            <p className={TestimonialsStyle.testimonialText} key ={document.node.id}>
                            <p>{document.node.acf.testimonial}</p>
                       {/*Testimonial Name of Person and location */}
                        <p className={TestimonialsStyle.testimonialName}>{document.node.acf.name} - {document.node.acf.location}</p>
                        </p>
                        ))}
                        <hr className={TestimonialsStyle.hr} />

                        {/*<p className={TestimonialsStyle.testimonialText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer quis nunc tristique, eleifend leo vitae, lobortis
                      libero. In at quam nunc. Duis sagittis luctus ante, in
                      aliquam lorem pharetra in.
                        </p>
                        <p className={TestimonialsStyle.testimonialName}>John Smith</p>

                        <hr className={TestimonialsStyle.hr} />

                        <p className={TestimonialsStyle.testimonialText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer quis nunc tristique, eleifend leo vitae, lobortis
                      libero. In at quam nunc. Duis sagittis luctus ante, in
                      aliquam lorem pharetra in.
                        </p>
                        <p className={TestimonialsStyle.testimonialName}>John Smith</p> */}
                    </div>
                    <img src={MainBkgd} alt="Glasses of Wine" className={TestimonialsStyle.mainBkgd} />
                </Col>
                <Col lg={6} md={0} className={TestimonialsStyle.rightSection}>
                    <div className="row">
                        <Col md={4} className={TestimonialsStyle.rightTopImg}></Col>
                        <Col md={8} className={TestimonialsStyle.rightTopText}>
                            <h1 className="text-center">Our Tastings</h1>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <AniLink swipe direction="up" entryOffset={100} to="/tastings" className={TestimonialsStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
                        </Col>
                    </div>
                    <div className={TestimonialsStyle.rightBottomRow}>
                        <Col md={12} className={TestimonialsStyle.rightBottomSection}>
                            <h1 className="text-center">Our Mission</h1>
                            <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum ut dolor a laoreet. Fusce imperdiet, dolor eu fermentum rhoncus, ligula nibh dapibus sem, in rutrum tortor turpis eget tortor. </p>
                            <AniLink swipe direction="up" entryOffset={100} to="/mission" className={TestimonialsStyle.btn}>LEARN MORE</AniLink>
                        </Col>
                    </div>
                </Col>
            </div>
        </Layout>
    )
}

export default TestimonialsPage

export const pageQuery = graphql`
    query TestimonialQuery {
        allWordpressWpTestimonials {
            edges {
                node {
                    acf {
                        testimonial
                        name
                        location
                    }
                }
            }
        }
    }
    `
