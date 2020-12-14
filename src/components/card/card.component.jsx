import React from "react";

import { TheCard, Title, ImageContainer } from "./card.styles.js";

const Card = ({ title, imgUrl }) => {
  return (
    <TheCard>
      <Title>{title}</Title>
      <ImageContainer>
        <img alt="" src={imgUrl} />
      </ImageContainer>
    </TheCard>
  );
};

export default Card;
