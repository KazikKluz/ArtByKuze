import React from "react";

import "./card.styles.scss";

const Card = ({ title, imgUrl }) => {
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <div className="image-container">
        <img alt="" src={imgUrl} />
      </div>
    </div>
  );
};

export default Card;
