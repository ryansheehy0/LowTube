import VideoViewCss from '../styles/VideoView.module.css'
import React from 'react'
import happinessThumbnail from '../assets/happiness.png'

function VideoView() {
  return (
	<div className={VideoViewCss.VideoView}>
		<img className={VideoViewCss.Thumbnail} src={happinessThumbnail}/>
		<span className={VideoViewCss.VideoTitle}>Video Title</span>
		<div className={VideoViewCss.TimeContainer}>
			<span className={VideoViewCss.Time}>0:00</span>
			<span className={VideoViewCss.Uploaded}>1 year ago</span>
		</div>
		<div className={VideoViewCss.ChanPlstContainer}>
			<button className={VideoViewCss.Channel}>Chan</button>
			<button className={VideoViewCss.Plst}>Plst</button>
		</div>
	</div>
  )
}

export default VideoView