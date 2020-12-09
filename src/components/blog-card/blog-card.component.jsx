import React from "react";

import "./blog-card.styles.scss";

const BlogCard = ({ title, date, imgUrl }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img alt="" src={imgUrl} />
      </div>
      <h3 className="title">{title}</h3>
      <p className="date">{date}</p>
    </div>
  );
};

export default BlogCard;
