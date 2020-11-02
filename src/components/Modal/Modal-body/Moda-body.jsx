import React from "react";
import Voting from "../../Voting/Voting";
import FacebookVoting from "../../Voting/FacebookVoting/FacebookVoting";
import ModalConfirm from "../Modal-confirm/Modal-confirm";

const ModalBody = ({ isConfirmShow, movieRating, setMovieRating, userData , setUserData, movieId }) => {

  if(!isConfirmShow && !userData && !movieRating) {
    return (
      <div className="modal-vote-section">
        <h3 className="modal-title">Оцініть фільм</h3>
        <Voting
          movieRating={movieRating}
          setMovieRating={setMovieRating}
        />
      </div>
    )
  }

  if(!isConfirmShow && userData && !movieRating) {
    return (
      <div className="modal-vote-section">
        <h3 className="modal-title">Оцініть фільм</h3>
        <Voting
          movieRating={movieRating}
          setMovieRating={setMovieRating}
        />
      </div>
    )
  }

  if(!userData && movieRating) {
    return <FacebookVoting setUserData={setUserData} movieId={movieId}/>
  }

  if(userData && movieRating) {
    return <ModalConfirm/>
  }

};

export default ModalBody;