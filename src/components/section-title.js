import React from "react";
import {NavLink} from "react-router-dom";

const SectionTitle = (props) => {
    return (
        <h1 className="section-title">
           <NavLink to={props.to} className="section-title-link">{props.title}</NavLink>
        </h1>
    )
};

export default SectionTitle;