import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../styles/global.css"


export default () => (
    <StaticQuery query={graphql`
        query MissionRightBottom {
            wordpressWpMission {
                acf{
                    subtitle3
                    subcontent3
                }
            }
        }
        `}
        render={data => (
            <div>
                <h1 className="text-center">{data.wordpressWpMission.acf.subtitle3}</h1>
                <p>{data.wordpressWpMission.acf.subcontent3}</p>
                <AniLink swipe direction="up" entryOffset={100} to="/tastings" className="btn">DISCOVER OUR TASTINGS</AniLink>
            </div>
        )}
        />
)