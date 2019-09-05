import React from "react"

const Video = ({ videoSrcURL, videoTitle }) => (
    <div className="video">
      <iframe src={videoSrcURL}
        title={videoTitle} 
        width="560" 
        height="315" 
        frameborder="0" 
        allowfullscreen="allowfullscreen">   
        </iframe>
    </div>
  )

  export default Video