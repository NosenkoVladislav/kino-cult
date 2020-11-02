import React from "react";
import { NavLink } from "react-router-dom";

const SectionTitle = ({ to, title }) => {
  return (
    <h1 className="section-title">
      <NavLink to={to} className="section-title-link">
        {title}
      </NavLink>
    </h1>
  );
};

export default SectionTitle;
