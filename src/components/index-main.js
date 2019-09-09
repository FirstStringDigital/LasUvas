import React from "react"
import { StaticQuery, graphql } from "gatsby"
import IndexStyle from "../styles/index.module.scss"
import MainLogo from '../images/las_uvas_logo.png'


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
            <img src={MainLogo} alt="Las Uvas Logo" className={IndexStyle.mainLogo} />
            <p className={IndexStyle.mainText}>{data.wordpressWpHome.acf.content}</p>
        </div>
        )}
        />
)