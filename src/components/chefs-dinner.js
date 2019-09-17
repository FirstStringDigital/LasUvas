import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/global.css"


export default () => (
    <StaticQuery query={graphql`
        query ChefsDinner {
            wordpressWpTasting {
                acf{
                    subtitle3
                    subcontent3
                    price3
                }
            }
        }
        `}
        render={data => (
            <div>
            <h1 className="main-title-bold">Discover Our Tastings</h1>
            <h1 className="main-section-title">{data.wordpressWpTasting.acf.subtitle3}</h1>
            <p className="main-text">{data.wordpressWpTasting.acf.subcontent3}</p>
            <p className="price">{data.wordpressWpTasting.acf.price3}</p>
            {/*Calendly*/}
            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
            <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
            <a className="btn" href="https://calendly.com/elevateloscabos/las-uvas-wine-tasting"  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/elevateloscabos/las-uvas-wine-tasting'});return false;">BOOK CHEF'S DINNER</a>
            {/*Calendly*/}
            </div>
        )}
        />
)