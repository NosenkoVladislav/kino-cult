import React from "react";

const InfoBlock = ({title, child}) => {
    return (
        <div className="info-block">
            <div className="info-title">{title}</div>
            <div className="info-text">{child}</div>
        </div>
    )
}

export default InfoBlock;