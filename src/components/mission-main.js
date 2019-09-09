import React from "react"
import { StaticQuery, graphql } from "gatsby"
import MissionStyle from "../styles/mission.module.scss"


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
                <h1 className={MissionStyle.mainTitleBold}>Our Mission</h1>
                <h1 className={MissionStyle.mainSectionTitle}>{data.wordpressWpMission.acf.subtitle}</h1>
                <p className={MissionStyle.mainText}>{data.wordpressWpMission.acf.subcontent}</p>
                <div className={MissionStyle.mobileText}>
                    <h1 className="text-center">{data.wordpressWpMission.acf.subtitle2}</h1>
                    <p>{data.wordpressWpMission.acf.subcontent2}</p>
                    <h1 className="text-center">Contact Us</h1>
                    <a href="mailto:hola@elevateloscabos.com" className={MissionStyle.btn}>CONTACT</a>
                </div>
            </div>
        )}
        />
)