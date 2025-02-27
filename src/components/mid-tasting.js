import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Offline, Online } from "react-detect-offline"
import "../styles/global.css"


export default () => (
    <StaticQuery query={graphql`
        query MidTasting {
            wordpressWpTasting {
                acf{
                    midlevelTastingTitle
                    midlevelTastingContent
                    midPrice
                    midPriceQualifier
                }
            }
        }
        `}
        render={data => (
            <div>
            <h1 className="main-title-bold">Discover Our Tastings</h1>
            <h1  className="main-section-title">{data.wordpressWpTasting.acf.midlevelTastingTitle}</h1>
            <p className="main-text">{data.wordpressWpTasting.acf.midlevelTastingContent}</p>
            <p className="price">{data.wordpressWpTasting.acf.midPrice}</p>
            <p className="price-qualifier">{data.wordpressWpTasting.acf.midPriceQualifier}</p>
            <Online>
            {/*Calendly*/}
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
             <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
            <a className="btn" href="https://calendly.com/lasuvas/wine-nosch?text_color=000000&primary_color=900561"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/lasuvas/wine-nosch'});return false;">BOOK WINE + NOSCH</a>
            {/*Calendly*/}
            </Online>
            <Offline><p className="offline-text-tasting">You must connect to the internet to book an event.</p></Offline>
            </div>
        )}
        />
)