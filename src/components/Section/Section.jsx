import React from "react";
import SectionTitle from "./Section-title/Section-title";
import MovieList from "../Movie-list/Movie-list";

const Section = ({
  title,
  link,
  gridContent = "",
  movies = null,
  child = null,
  archived,
  sorted,
}) => {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle to={link} title={title} />
        {!movies ? null : (
          <div className={`grid-content grid-content__${gridContent}`}>
            <MovieList movies={movies} archived={archived} sorted={sorted} />
          </div>
        )}
        {!child ? null : child}
      </div>
    </section>
  );
};

export default Section;
