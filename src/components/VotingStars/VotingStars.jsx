import React from "react";
import VotingStar from "../Voting/Voting-star/Voting-star";

const VotingStars = ({ disabled = false, ratedStars = 0, stars, setStars }) => {
  let starsArr = [];
  let starsNum = ratedStars > 0 ? ratedStars : 5;

  for (let i = starsNum; i > 0; i--) {
    starsArr.push(
      <VotingStar
        key={i}
        setStars={setStars}
        starRating={i}
        stars={stars}
        disabled={disabled}
      />
    );
  }

  return <div className="voting-stars">{starsArr}</div>;
};

export default VotingStars;
