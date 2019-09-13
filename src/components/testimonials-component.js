import React from "react"
import { StaticQuery, graphql } from "gatsby"
import TestimonialsStyle from "../styles/testimonials.module.scss"


export default () => (
    <StaticQuery query={graphql`
        query Testimonials {
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
        `}
        render={data => (
            <div>
            <div className={TestimonialsStyle.testimonialSection}>
                {data.allWordpressWpTestimonials.edges.map(document => (
                <div className={TestimonialsStyle.testimonialText} key ={document.node.id}>
                    {/* Testimonial Text */}
                    <p>{document.node.acf.testimonial}</p>
                    {/*Testimonial Name of Person and location */}
                    <p className={TestimonialsStyle.testimonialName}>{document.node.acf.name} - {document.node.acf.location}</p>
                    <hr />
                </div>
                ))}
            </div>
            </div>
        )}
        />
)