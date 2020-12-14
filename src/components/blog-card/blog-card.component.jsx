import React from "react";

import {
  TheCard,
  ImageContainer,
  Title,
  PostDate,
} from "./blog.card.styles.js";

const BlogCard = ({ title, date, imgUrl }) => {
  return (
    <TheCard>
      <ImageContainer>
        <img alt="" src={imgUrl} />
      </ImageContainer>
      <Title>{title}</Title>
      <PostDate>{date}</PostDate>
    </TheCard>
  );
};

export default BlogCard;
