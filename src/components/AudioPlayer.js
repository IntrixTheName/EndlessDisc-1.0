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
    
    const audioRef = new Audio(props.src);
    const intervalRef = useRef();
    const isReady = useRef(false);

    return (
        <div className="audio-player">
            <div className="track-info">
                <img
                    className="album-art"
                    src={props.img}
                />
                <div className="track-text">
                    <h2 className="title">{props.title}</h2>
                    <h3 className="artist">{props.artist}</h3>
                </div>
            </div>
        </div>
    )
}

export default AudioPlayer;