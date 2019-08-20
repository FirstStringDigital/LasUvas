import React from 'react'
import {Helmet} from 'react-helmet'

class Calendly extends React.Component {
    render () {
    
        return (
                <div className="tasting-scheduler">
                    <Helmet>
                    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
                    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
                    
                    </Helmet>
                    </div>
        );
    }
};

export default Calendly