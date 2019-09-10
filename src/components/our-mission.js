import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export default () => (
    <StaticQuery query={graphql`
        query OurMission {
            wordpressWpHome {
                acf{
                    subtitle2
                    subcontent2
                }
            }
        }
        `}
        render={data => (
            <div>
            <h1 className="text-center">{data.wordpressWpHome.acf.subtitle2}</h1>
            <p>{data.wordpressWpHome.acf.subcontent2}</p>
            <AniLink swipe direction="up" entryOffset={100} to="/mission" className="btn">LEARN MORE</AniLink>
            </div>
        )}
        />
)