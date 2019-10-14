import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"
import MainLogo from '../images/las_uvas_logo_main.png'


export default () => (
    <StaticQuery query={graphql`
        query HomeMain {
            wordpressWpHome {
                acf{
                    welcomeContent
                }
            }
        }
        `}
        render={data => (
            <div>
            <img src={MainLogo} alt="Las Uvas Logo" className="main-logo" />
            <p className="main-text">{data.wordpressWpHome.acf.welcomeContent}</p>
        </div>
        )}
        />
)