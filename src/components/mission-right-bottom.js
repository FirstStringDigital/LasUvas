import React from "react"
import MissionStyle from "../styles/mission.module.scss"


const MissionRightBottom = () => {
    return(
        <div>
            <h1 className="text-center">Contact Us</h1>
            <a href="mailto:hola@elevateloscabos.com" className={MissionStyle.btn}>CONTACT US</a>
        </div>
    )
}

export default MissionRightBottom