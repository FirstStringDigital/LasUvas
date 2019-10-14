import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Offline, Online } from "react-detect-offline"
import "../styles/global.css"
import TastingStyle from "../styles/tasting.module.scss"


export default () => (
    <StaticQuery query={graphql`
        query ChefsDinnerDesktop {
            wordpressWpTasting {
                acf{
                    premiumTastingTitle
                    premiumTastingContent
                    premiumRegularPrice
                    premRegQualifier
                    extraPremPrice
                    extraPremQualifier
                }
            }
        }
        `}
        render={data => (
            <div className={TastingStyle.chefsDinnerDesktop}>
            <h1 className="main-title-bold">Discover Our Tastings</h1>
            <h1 className="main-section-title">{data.wordpressWpTasting.acf.premiumTastingTitle}</h1>
            <p className="main-text">{data.wordpressWpTasting.acf.premiumTastingContent}</p>
            <p className="price">{data.wordpressWpTasting.acf.premiumRegularPrice}</p>
            <p className="price-qualifier">{data.wordpressWpTasting.acf.premRegQualifier}</p>
            <p className="price">{data.wordpressWpTasting.acf.extraPremPrice}</p>
            <p className="price-qualifier">{data.wordpressWpTasting.acf.extraPremQualifier}</p>
            <Online>
            {/*Calendly*/}
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
            <a className="btn" href="https://calendly.com/lasuvas/chefs-dinner?text_color=000000&primary_color=900561"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/lasuvas/chefs-dinner'});return false;">BOOK CHEF'S DINNER</a>
            {/*Calendly*/}
            </Online>
            <Offline><p className="offline-text-tasting">You must be online to book an event.</p></Offline>
            </div>
        )}
        />
)