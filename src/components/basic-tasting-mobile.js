import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
            {/*Calendly*/}
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
            <a className="btn" href="https://calendly.com/elevateloscabos/las-uvas-wine-tasting"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/elevateloscabos/las-uvas-wine-tasting'});return false;">Book Now</a>
            {/*Calendly*/}
            </div>
        )}
        />
)