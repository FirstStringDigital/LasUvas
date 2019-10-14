import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"

export default () => (
    <StaticQuery query={graphql`
        query MissionMain {
            wordpressWpMission {
                acf{
                    subtitle
                    subcontent
                }
            }
        }
        `}
        render={data => (
            <div>
                <h1 className="main-title-bold">Our Mission</h1>
                <h1 className="main-section-title">{data.wordpressWpMission.acf.subtitle}</h1>
                <p className="main-text">{data.wordpressWpMission.acf.subcontent}</p>
                <p className="main-text">Swipe for Frequently Asked Questions and the nitty-gritty.</p>
            </div>
        )}
        />
)