import React, { useEffect } from "react";
import Section from "../components/Section/Section";
import Carousel from "../components/Carousel/Carousel";
import ImageVideo from "../components/ImageVideo/ImageVideo";

const Archive = ({ movies }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="container">
      <Section
        title={"Програма"}
        link={"/archive"}
        movies={movies}
        gridContent={"three"}
      />
      <Section title={"Фото"} link={"/archive"} child={<Carousel />} />
      {movies ? (
        <Section
          title={"Іміджеві ролики"}
          link={"/archive"}
          child={<ImageVideo video={movies[0]} />}
        />
      ) : null}
    </div>
  );
};

export default Archive;
