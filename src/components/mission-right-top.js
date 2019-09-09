import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"


export default () => (
    <StaticQuery query={graphql`
        query MissionRightTop {
            wordpressWpMission {
                acf{
                    subtitle2
                    subcontent2
                }
            }
        }
        `}
        render={data => (
            <div>
                <h1 className="text-center">{data.wordpressWpMission.acf.subtitle2}</h1>
                <p>{data.wordpressWpMission.acf.subcontent2}</p>
                <a href="mailto:hola@elevateloscabos.com" className="btn">CONTACT US</a>
            </div>
        )}
        />
)