import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"
import MainLogo from '../images/las_uvas_logo.jpg'


export default () => (
    <StaticQuery query={graphql`
        query HomeMain {
            wordpressWpHome {
                acf{
                    content
                }
            }
        }
        `}
        render={data => (
            <div>
            <img src={MainLogo} alt="Las Uvas Logo" className="main-logo" />
            <p className="main-text">{data.wordpressWpHome.acf.content}</p>
        </div>
        )}
        />
)