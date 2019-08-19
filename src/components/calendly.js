import React, { Component } from 'react'


class Calendly extends Component {
    componentDidMount () {
        const head = document.querySelector ('head');
        const script = document.createElement ('script');
        const link = document.createElement('link');
        script.setAttribute('src', 'https://calendly.com/assets/external/widget.js');
        link.setAttribute('href', 'https://calendly.com/assets/external/widget.css');
        head.appendChild (script, link);
    }

    componentWillUnmount () {

    }

    render () {
        return (
            <div>
                <div id="tasting scheduler">
                    <div 
                    className = 'calendly-popup-widget'
                    data-url = 'https://calendly.com/elevateloscabos'
                    />
                </div>
            </div>
        )
    }
}

export default Calendly