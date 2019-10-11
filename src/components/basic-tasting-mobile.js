import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Offline, Online } from "react-detect-offline"
import "../styles/global.css"
import TastingStyle from "../styles/tasting.module.scss"


export default () => (
    <StaticQuery query={graphql`
        query BasicTastingMobile {
            wordpressWpTasting {
                acf{
                    subtitle
                    subcontent
                    price1
                }
            }
        }
        `}
        render={data => (
            <div className={TastingStyle.basicTastingMobile}>
            <h1 className="main-title-bold">Discover Our Tastings</h1>
            <h1 className="main-section-title">{data.wordpressWpTasting.acf.subtitle}</h1>
            <p className="main-text">{data.wordpressWpTasting.acf.subcontent}</p>
            <p className="price">{data.wordpressWpTasting.acf.price1}</p>
            <Online>
            {/*Calendly*/}
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
            <a className="btn" href="https://calendly.com/lasuvas/basic-tasting?text_color=000000&primary_color=900561"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/lasuvas/basic-tasting'});return false;">BOOK BASIC TASTING</a>
            {/*Calendly*/}
            </Online>
            <Offline><p className="offline-text">You must be online to book an event.</p></Offline>
            </div>
        )}
        />
)