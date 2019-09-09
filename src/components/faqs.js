import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Accordion, Card, Button } from "react-bootstrap"
import FaqsStyle from "../styles/faqs.module.scss"


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
            <h1 className={FaqsStyle.mainTitleBold} id="faqs">FAQ's</h1>
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
            </div>
        )}
        />
)