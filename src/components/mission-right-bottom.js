import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../styles/global.css"


export default () => (
    <StaticQuery query={graphql`
        query MissionRightBottom {
            wordpressWpMission {
                acf{
                    aboutMexicanWineTitle
                    aboutMexicanWineContent
                }
            }
        }
        `}
        render={data => (
            <div>
                <h1 className="main-title-bold">Our Mission</h1>
                <h1 className="text-center main-section-title">{data.wordpressWpMission.acf.aboutMexicanWineTitle}</h1>
                <p className="main-text">{data.wordpressWpMission.acf.aboutMexicanWineContent}</p>
                <AniLink swipe direction="up" entryOffset={100} to="/tastings" className="btn">DISCOVER OUR TASTINGS</AniLink>
            </div>
        )}
        />
)