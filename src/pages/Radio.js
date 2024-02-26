import React, {useState, useEffect } from "react";
import "./Radio.css";

function Radio() {
    const [radioList, setRadioList] = useState([]);

    //Get information about a user's radio preferences
    useEffect(() => {
        async function getRadio() {
            const response = await fetch("http://localhost:5000/get-radio")
        }
    })

    return (
        <div className="radio page">
            <h1>Endless Dial - Online Radio</h1>
            <ul>
                <li>
                    <audio controls>
                        <source src="https://strm112.1.fm/back280s_mobile_mp3" type="audio/mpeg" />
                    </audio>
                </li>
            </ul>
        </div>
    )
}

export default Radio;