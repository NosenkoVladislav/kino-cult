import React, { useState } from "react";
import VotingStars from "../VotingStars/VotingStars";

const Voting = ({ setMovieRating }) => {
  const [stars, setStars] = useState(null);

  return (
    <div className="voting">
      <VotingStars stars={stars} setStars={setStars} />
      <div className={`voting-btn ${stars ? "" : "disabled"}`}>
        <button
          className="btn"
          onClick={() => setMovieRating(stars)}
          disabled={stars ? false : "disabled"}
        >
          Проголосувати
        </button>
      </div>
    </div>
  );
};

export default Voting;
