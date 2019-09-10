import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import MissionStyle from "../styles/mission.module.scss"
import "../styles/global.css"

const btnStyle = {
    margin: '0 auto 40px auto',
    display: 'block'
};

export default () => (
    <StaticQuery query={graphql`
        query MissionMain {
            wordpressWpMission {
                acf{
                    subtitle
                    subcontent
                    subtitle2
                    subcontent2
                    subtitle3
                    subcontent3
                }
            }
        }
        `}
        render={data => (
            <div className={MissionStyle.mainSection}>
                <h1 className="main-title-bold">Our Mission</h1>
                <h1 className="main-section-title">{data.wordpressWpMission.acf.subtitle}</h1>
                <p className="main-text">{data.wordpressWpMission.acf.subcontent}</p>
                <div className={MissionStyle.mobileText}>
                <h1 className="text-center">{data.wordpressWpMission.acf.subtitle3}</h1>
                    <p>{data.wordpressWpMission.acf.subcontent3}</p>
                    <AniLink swipe direction="up" entryOffset={100} to="/tastings" className="btn" style={btnStyle}>DISCOVER OUR TASTINGS</AniLink>
                    <h1 className="text-center">{data.wordpressWpMission.acf.subtitle2}</h1>
                    <p>{data.wordpressWpMission.acf.subcontent2}</p>
                    <a href="mailto:hola@elevateloscabos.com" className="btn">CONTACT US</a>
                </div>
            </div>
        )}
        />
)