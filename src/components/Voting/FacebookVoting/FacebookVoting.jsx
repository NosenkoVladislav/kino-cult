import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookVoting = ({setUserData, movieId}) => {
  const responseFacebook = ({userID, name}) => {
    setUserData({
      userID: userID,
      userName: name,
    });
    localStorage.setItem("userID", userID);
  };

  return (
    <FacebookLogin
      appId={407436636957899}
      autoLoad={true}
      cssClass="facebook-vote-btn"
      fields="name,email,picture"
      callback={responseFacebook}
      isMobile={true}
      textButton={"Увійти через facebook"}
      redirectUri={"http://localhost:3000/"}
    />
  );
};

export default FacebookVoting;
