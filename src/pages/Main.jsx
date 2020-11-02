import React, { Fragment } from "react";
import Section from "../components/Section/Section";

const Main = ({ movies }) => {
  return (
    <Fragment>
      <Section
        title={["Культ", <br key="cultOf" />, "завтрашнього дня"]}
        link="/"
        gridContent={"three"}
        movies={movies}
      />
      <Section
        title={"Переможці-2019"}
        link="/winners"
        gridContent={"two"}
        movies={movies}
      />
      <Section
        title={"Архів"}
        link="/archive"
        gridContent={"two"}
        movies={movies}
        archived={true}
        sorted={true}
      />
    </Fragment>
  );
};

export default Main;
