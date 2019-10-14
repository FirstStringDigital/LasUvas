import React from "react"
import "../styles/global.css"
import FourOFourStyle from "../styles/four-o-four.module.scss"
import MainLogo from '../images/las_uvas_logo_main.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FourOFourMain = () => {
    return(
        <div>
            <img src={MainLogo} alt="Las Uvas Logo" className="main-logo" />
            <p className={FourOFourStyle.mainText}>Oh no! This page does not exist.</p>
            <AniLink swipe direction="up" entryOffset={100} to="/" className="btn">LET'S GO HOME</AniLink>
        </div>
    )
}

export default FourOFourMain