import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import FaqsStyle from "./faqs.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Col, Accordion, Card, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import MainBkgd from "../images/main-background.png"

const FaqsPage = ({ data }) => {
  return (
    <Layout>
      <Head title="FAQ's" />
      <div className="row">
        <Col lg={6} md={12} className={FaqsStyle.mainSection}>
          <h1 className={FaqsStyle.mainTitleBold}>FAQ's</h1>
          <h1 className={FaqsStyle.mainSectionTitle}>The Not So Fine Print</h1>
          <div className={FaqsStyle.accordianSection}>{data.allWordpressWpFaq.edges.map(document => 
            (
              <Accordion>
              <Card className={FaqsStyle.card}>
                <Card.Header className={FaqsStyle.cardHeader}>
                  <Accordion.Toggle className={FaqsStyle.btnToggle} as={Button} variant="link" eventKey="0">{document.node.title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className={FaqsStyle.cardBody}>
                    <p>{document.node.acf.faq_text}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            ))}
          </div>
          <AniLink swipe direction="left" entryOffset={100} to="/tastings-with-appetizers">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className={FaqsStyle.arrowRightIcon} />
          </AniLink>
          <img src={MainBkgd} alt="Glasses of Wine" className={FaqsStyle.mainBkgd} />
        </Col>
        <Col lg={6} md={0} className={FaqsStyle.rightSection}>
          <div className="row">
            <Col md={4} className={FaqsStyle.rightTopImg}></Col>
            <Col md={8} className={FaqsStyle.rightTopText}>
                <h1 className="text-center">Our Tastings</h1>
                <p>some data</p>
                <AniLink swipe direction="up" entryOffset={100} to="/tastings" className={FaqsStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
            </Col>
          </div>
          <div className={FaqsStyle.rightBottomRow}>
            <Col md={12} className={FaqsStyle.rightBottomSection}>
              <h1 className="text-center">Contact Us</h1>
              <p className={FaqsStyle.rightBottomDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer quis nunc tristique, eleifend leo vitae, lobortis
                      libero. In at quam nunc. Duis sagittis luctus ante, in
                      aliquam lorem pharetra in. Pellentesque in nunc quis
                      tellus varius blandit. Suspendisse consequat aliquet
                      luctus. Donec aliquam rhoncus turpis, sit amet pulvinar
                      tortor viverra cursus.
                      </p>
                <a href="mailto:hola@elevateloscabos.com" className={FaqsStyle.btn}>CONTACT US</a>
            </Col>
          </div>
        </Col>
      </div>
    </Layout>
  )
}

export default FaqsPage

export const pageQuery = graphql`
    query FaqQuery {
        allWordpressWpFaq {
            edges {
                node {
                    title
                    acf {
                      faq_text
                    }
                }
            }
        }
      }
    `
