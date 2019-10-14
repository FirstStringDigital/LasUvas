import React from "react"
import "../styles/global.css"
import MainLogo from '../images/las_uvas_logo_main.png'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FourOFourMain = () => {
    return(
        <div>
            <img src={MainLogo} alt="Las Uvas Logo" className="main-logo" />
            <h1 className="text-center main-title-bold">404 Page</h1>
            <p className="text-center">Oh no! This page does not exist.</p>
            <AniLink swipe direction="up" entryOffset={100} to="/" className="btn">LET'S GO HOME</AniLink>
        </div>
    )
}

export default FourOFourMain