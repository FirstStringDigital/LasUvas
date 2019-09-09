import React from "react"
import { StaticQuery, graphql } from "gatsby"
import TastingsStyle from "../styles/tastings.module.scss"


export default () => (
    <StaticQuery query={graphql`
        query MidTasting {
            wordpressWpTasting {
                acf{
                    subtitle2
                    subcontent2
                    price2
                }
            }
        }
        `}
        render={data => (
            <div>
            <h1 className="text-center">{data.wordpressWpTasting.acf.subtitle2}</h1>
            <p className={TastingsStyle.rightTopDescription}>{data.wordpressWpTasting.acf.subcontent2}</p>
            <p className={TastingsStyle.price}>{data.wordpressWpTasting.acf.price2}</p>
            {/*Calendly*/}
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
             <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
            <a className={TastingsStyle.btn} href="https://calendly.com/elevateloscabos/las-uvas-wine-tasting"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/elevateloscabos/las-uvas-wine-tasting'});return false;">Book Now</a>
            {/*Calendly*/}
            </div>
        )}
        />
)