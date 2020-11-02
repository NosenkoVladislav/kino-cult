import React from "react";
import playIcon from "./play-button.svg";

const PlayBtn = () => {
    return (
        <div className="play-icon">
            <div className="icon-bgc">
                <img
                    className="icon"
                    src={playIcon} alt="Play"
                />
            </div>
        </div>
    )
};

export default PlayBtn;