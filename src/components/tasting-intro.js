import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"


export default () => (
    <StaticQuery query={graphql`
        query TastingIntro {
            wordpressWpHome {
                acf{
                    subtitle
                    subcontent
                }
            }
        }
        `}
        render={data => (
            <div>
            <h1 className="main-title-bold">Discover Our Tastings</h1>
            <h1 className="main-section-title">{data.wordpressWpHome.acf.subtitle}</h1>
            <p className="main-text">{data.wordpressWpHome.acf.subcontent}</p>
            </div>
        )}
        />
)