import React from "react"
import { StaticQuery, graphql } from "gatsby"
import MissionStyle from "../styles/mission.module.scss"
import "../styles/global.css"


export default () => (
    <StaticQuery query={graphql`
        query MissionMain {
            wordpressWpMission {
                acf{
                    subtitle
                    subcontent
                    subtitle2
                    subcontent2
                }
            }
        }
        `}
        render={data => (
            <div>
                <h1 className="main-title-bold">Our Mission</h1>
                <h1 className="main-section-title">{data.wordpressWpMission.acf.subtitle}</h1>
                <p className="main-text">{data.wordpressWpMission.acf.subcontent}</p>
                <div className={MissionStyle.mobileText}>
                    <h1 className="text-center">{data.wordpressWpMission.acf.subtitle2}</h1>
                    <p>{data.wordpressWpMission.acf.subcontent2}</p>
                    <a href="mailto:hola@elevateloscabos.com" className="btn">CONTACT US</a>
                </div>
            </div>
        )}
        />
)