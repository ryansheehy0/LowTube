import VideoPageCss from '../styles/VideoPage.module.css'
import React, {useState} from 'react'
import happinessVideo from '../assets/happiness.mp4'

function Video() {
	const [speed, setSpeed] = useState(1.00)
	const [quality, setQuality] = useState(360)
	const [sub, setSub] = useState(false)

	function speedDown(){
		setSpeed(prevSpeed => {
			if(prevSpeed == 0){
				return 0
			}
			return prevSpeed - 0.25
		})
	}

	function speedUp(){
		setSpeed(prevSpeed => {
			if(prevSpeed == 16){
				return 16
			}
			return prevSpeed + 0.25
		})
	}

	function qualityDown(){
		setQuality(prevQuality => {
			switch(prevQuality){
				case 0:
					return 0
				case 144:
					return 0
				case 240:
					return 144
				case 360:
					return 240
				case 480:
					return 360
				case 720:
					return 480
				case 1080:
					return 720
			}
		})
	}

	function qualityUp(){
		setQuality(prevQuality => {
			switch(prevQuality){
				case 0:
					return 144
				case 144:
					return 240
				case 240:
					return 360
				case 360:
					return 480
				case 480:
					return 720
				case 720:
					return 1080
				case 1080:
					return 1080
			}
		})
	}

  return (
	<div className={VideoPageCss.VideoPage}>
		<video className={VideoPageCss.Video} controls>
			<source src={happinessVideo}/>
		</video>
		<div className={VideoPageCss.UpAndDownContainer}>
			<button className={VideoPageCss.Down} onClick={speedDown}>-</button>
			<span className={VideoPageCss.Speed}>{speed}</span>
			<button className={VideoPageCss.Up} onClick={speedUp}>+</button>
			<button className={VideoPageCss.Down} onClick={qualityDown}>-</button>
			<span className={VideoPageCss.Quality}>{quality}</span>
			<button className={VideoPageCss.Up} onClick={qualityUp}>+</button>
		</div>
		<div className={VideoPageCss.SetDefaultContainer}>
			<button className={VideoPageCss.SetDefaultSpeed}>Set default speed</button>
			<button className={VideoPageCss.SetDefaultQuality}>Set default quality</button>
		</div>
		<span className={VideoPageCss.VideoTitle}>Video Title</span> 
		<div className={VideoPageCss.ChannelContainer}>
			<button className={VideoPageCss.ChannelLogo}>Chan</button>
			<button className={VideoPageCss.Sub} onClick={() => setSub(!sub)}id={sub ? 'subed' : 'unsubed'}>Sub</button>
			<span className={VideoPageCss.ChannelName}>Channel Name</span> 
		</div>
		<div className={VideoPageCss.OtherButtonsContainer}>
			<button className={VideoPageCss.Backward}>&lt;</button>
			<button className={VideoPageCss.Forward}>&gt;</button>
			<button className={VideoPageCss.Desc}>Desc</button>
			<button className={VideoPageCss.Plst}>Plst</button>
			<button className={VideoPageCss.Loop}>Loop</button>
		</div>
	</div>
  )
}

export default Video