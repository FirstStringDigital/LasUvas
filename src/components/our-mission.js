import React from "react"
import { StaticQuery, graphql } from "gatsby"
import IndexStyle from "../styles/index.module.scss"
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
            <h1 className="text-center">Our Mission</h1>
            <p>{data.wordpressWpHome.acf.subcontent2}</p>
            <AniLink swipe direction="up" entryOffset={100} to="/mission" className={IndexStyle.btn}>LEARN MORE</AniLink>
            </div>
        )}
        />
)