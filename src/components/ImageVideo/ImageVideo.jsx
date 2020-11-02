import React from "react";
import Player from "../Player/Player";

const ImageVideo = ({ video }) => {
  return (
    <div className="image-video">
      <div className="player-section">
        {video ? <Player movie={video} /> : null}
      </div>
    </div>
  );
};

export default ImageVideo;
