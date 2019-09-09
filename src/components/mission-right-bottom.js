import React from "react"
import { StaticQuery, graphql } from "gatsby"
import MissionStyle from "../styles/mission.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"


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
                <AniLink swipe direction="left" entryOffset={100} to="/tastings" className={MissionStyle.btn}>DISCOVER OUR TASTINGS</AniLink>
            </div>
        )}
        />
)