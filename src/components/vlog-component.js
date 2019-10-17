import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Offline, Online } from "react-detect-offline"
import Video from './video'
import VlogStyle from "../styles/vlog.module.scss"


export default () => (
    <StaticQuery query={graphql`
        query Vlog {
            allWordpressPost {
                edges {
                    node {
                        id
                        acf {
                            youtubeurl
                        }
                    }
                }
            }
        }
        `}
        render={data => (
            <div>
            <Online>
            <div className={VlogStyle.videoSection}>{data.allWordpressPost.edges.map(document => (
            <li key={document.node.id}>
                <Video videoSrcURL={document.node.acf.youtubeurl} videoTitle="Featured Video"/>
            </li>
            ))}
            </div>
            </Online>
            <Offline>
                <p className="offline-text-vlog">You must connect to the internet to view our VLOG.</p> 
            </Offline>
            </div>
        )}
        />
)