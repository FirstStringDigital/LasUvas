import React from "react"
import Header from './header'
import '../styles/bootstrap.css'

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout