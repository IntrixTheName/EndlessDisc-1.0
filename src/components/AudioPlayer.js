//Audio player component with inspiration from https://www.letsbuildui.dev/articles/building-an-audio-player-with-react-hooks/

import React, { useState, useRef, useEffect } from "react";
import "./AudioPlayer.css";
import {
	IoPlayBackSharp,
	IoPlayForwardSharp,
	IoPlaySkipBackSharp,
	IoPlaySkipForwardSharp,
	IoPlaySharp,
	IoPauseSharp,
} from "react-icons/io5";

function AudioPlayer(props) {
	const [trackProgress, setTrackProgress] = useState(0);
	const [playing, togglePlay] = useState(false);

	const audioRef = useRef(new Audio(props.src));
	const intervalRef = useRef();
	const isReady = useRef(false);

	useEffect(() => {
		if (playing) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	}, [playing]);

	return (
		<div className="audio-player">
			<div className="track-info">
				<img className="album-art" src={props.img} />
				<div className="track-text">
					<h2 className="title">{props.title}</h2>
					<h3 className="artist">{props.artist}</h3>
				</div>
				{playing ? (
					<button
						type="button"
						className="pause"
						onClick={() => togglePlay(false)}
						aria-label="Pause"
					>
						<IoPauseSharp />
					</button>
				) : (
					<button
						type="button"
						className="play"
						onClick={() => togglePlay(true)}
						aria-label="Play"
					>
						<IoPlaySharp />
					</button>
				)}
			</div>
		</div>
	);
}

export default AudioPlayer;
