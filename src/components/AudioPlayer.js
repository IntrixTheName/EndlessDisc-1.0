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
  IoPlayForwardCircleSharp,
  IoPlayForwardCircleOutline,
  IoPlayBackCircleSharp,
  IoPlayBackCircleOutline,
  IoPlay,
} from "react-icons/io5";

function RadioPlayer(props) {
  const ident = props.ident;
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, togglePlay] = useState(false);

  const audioRef = useRef(new Audio(props.src));

  useEffect(() => {
    // Update duration when audio metadata is loaded
    audioRef.current.onloadedmetadata = () => {
      setDuration(audioRef.current.duration);
    };

    return () => {
      audioRef.current.onloadedmetadata = null; // Cleanup
    };
  }, [duration]);

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
            className="audio-control"
            onClick={() => togglePlay(false)}
            aria-label="Pause"
          >
            <IoPauseSharp className="audio-control-child" />
          </button>
        ) : (
          <button
            type="button"
            className="audio-control"
            onClick={() => {
              togglePlay(true);
              setTrackProgress(duration);
            }}
            aria-label="Play"
          >
            <IoPlaySharp className="audio-control-child" />
          </button>
        )}
      </div>
    </div>
  );
}

export default RadioPlayer;

/* Unused parts for Song Player component in future:

<button
					type="button"
					className="audio-control"
					onClick={() => setTrackProgress(Math.max(0, trackProgress - 15))}
				>
					<IoPlayBackSharp className="audio-control-child"/>
				</button>

<button
						type="button"
						className="audio-control"
						onClick={() => setTrackProgress(Math.min(duration, trackProgress + 15))}
					>
						<IoPlayForwardSharp className="audio-control-child"/>
					</button>
*/
