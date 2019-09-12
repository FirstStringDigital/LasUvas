import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Accordion, Card, Button } from "react-bootstrap"
import "../styles/global.css"
import MissionStyle from "../styles/mission.module.scss"


export default () => (
    <StaticQuery query={graphql`
        query Faqs {
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
        `}
        render={data => (
            <div>
            <h1 className="main-title-bold">Our Mission</h1>
          <h1 className="main-section-title">FAQ</h1>
          <div className={MissionStyle.accordionSection}>{data.allWordpressWpFaq.edges.map(document => 
            (
              <Accordion>
              <Card className={MissionStyle.card}>
                <Card.Header className={MissionStyle.cardHeader}>
                  <Accordion.Toggle className={MissionStyle.btnToggle} as={Button} variant="link" eventKey="0">{document.node.title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className={MissionStyle.cardBody}>
                    <p>{document.node.acf.faq_text}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            ))}
          </div>
            </div>
        )}
        />
)