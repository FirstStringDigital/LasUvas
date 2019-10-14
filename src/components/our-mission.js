import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export default () => (
    <StaticQuery query={graphql`
        query OurMission {
            wordpressWpHome {
                acf{
                    ourMissionTitle
                    ourMissionContent
                }
            }
        }
        `}
        render={data => (
            <div>
            <h1 className="text-center">{data.wordpressWpHome.acf.ourMissionTitle}</h1>
            <p>{data.wordpressWpHome.acf.ourMissionContent}</p>
            <AniLink swipe direction="up" entryOffset={100} to="/mission" className="btn">ABOUT LAS UVAS</AniLink>
            </div>
        )}
        />
)