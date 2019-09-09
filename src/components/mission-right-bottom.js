import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"


export default () => (
    <StaticQuery query={graphql`
        query MissionRightBottom {
            wordpressWpMission {
                acf{
                    subtitle3
                    subcontent3
                }
            }
        }
        `}
        render={data => (
            <div>
                <h1 className="text-center">{data.wordpressWpMission.acf.subtitle3}</h1>
                <p>{data.wordpressWpMission.acf.subcontent3}</p>
            </div>
        )}
        />
)