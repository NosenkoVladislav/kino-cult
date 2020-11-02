import React, { useState, useEffect } from "react";
import ModalBody from "./Modal-body/Moda-body";
import Service from "../../service/service";

const Modal = ({
  movie,
  isModalShow,
  switchModal,
  userData,
  setUserData,
  movieRating,
  setMovieRating,
}) => {
  const [isConfirmShow, showConfirm] = useState(false);
  const api = new Service();

  useEffect(() => {
    if (userData !== null && movieRating !== null) {
      api.setMovieRating(movie.id, userData, movieRating, movie.name).then((responce) => {
        responce.success
          ? showConfirm(true)
          : alert("Щось пішло не так...зверніться до технічної підтримки");
      });
    }
  }, [movieRating, userData]);

  return (
    <div className={`modal ${!isModalShow ? "hide" : ""}`}>
      <div className="modal-content">
        <div className="modal-head">
          <div className="modal-close">
            <svg
              onClick={() => switchModal()}
              className="modal-close-icon"
              x="0px"
              y="0px"
              viewBox="0 0 512.001 512.001"
              enableBackground="0 0 512.001 512.001;"
            >
              <path
                d="M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0
			L256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567
			c-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567
			c8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z"
              />
            </svg>
          </div>
        </div>
        <div className="modal-body">
          <ModalBody
            isConfirmShow={isConfirmShow}
            movieRating={movieRating}
            setMovieRating={setMovieRating}
            userData={userData}
            setUserData={setUserData}
            movieId={movie.id}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
