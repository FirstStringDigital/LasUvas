import React from 'react'
import '../styles/bootstrap.css'
import '../styles/global.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Col } from 'react-bootstrap'
import Logo from '../images/las_uvas_logo.jpg'

const Header = () => {
    return (
        <div className="row nav">
            <Col lg={5} md={10} sm={9} xs={8} className="nav-logo-col">
            <AniLink swipe direction="up" entryOffset={100} to="/"><img src={Logo} alt="Las Uvas logo" className="nav-logo" /></AniLink>
            </Col>
            <Col lg={7} md={2} sm={3} xs={4} className="nav-icon-col">
                <div className="icon-wrapper">
                    <a href="https://www.instagram.com/lasuvasmexico/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className="nav-icon" /></a>
                </div>
                <div className="icon-wrapper">
                    <a href="https://www.facebook.com/lasuvasmexico/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} className="nav-icon" /></a>
                </div>
            </Col>
        </div>
    )
}

export default Header