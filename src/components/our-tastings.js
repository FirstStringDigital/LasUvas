import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"


export default () => (
    <StaticQuery query={graphql`
        query OurTastings {
            wordpressWpHome {
                acf{
                    ourTastingsTitle
                    ourTastingsContent
                }
            }
        }
        `}
        render={data => (
            <div>
            <h1 className="text-center">{data.wordpressWpHome.acf.ourTastingsTitle}</h1>
            <p>{data.wordpressWpHome.acf.ourTastingsContent}</p>
            <AniLink swipe direction="up" entryOffset={100} to="/tastings" className="btn">DISCOVER OUR TASTINGS</AniLink>
            </div>
        )}
        />
)