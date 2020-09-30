import React from "react";
import {NavLink} from "react-router-dom";

const SectionTitle = (props) => {
    return (
        <h2 className="section-title">
            <NavLink to={props.to} className="section-title-link">{props.title}</NavLink>
        </h2>
    )
};

export default SectionTitle;