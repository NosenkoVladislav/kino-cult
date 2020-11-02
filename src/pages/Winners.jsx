import React, {useEffect} from "react";
import Section from "../components/Section/Section";

const Winners = ({ movies }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="container">
      <Section
        title={"Перемощці-2019"}
        link={"/winners"}
        movies={movies}
        gridContent={"three"}
      />
    </div>
  );
};

export default Winners;
