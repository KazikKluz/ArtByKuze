import React from "react";

import {
  MainContainer,
  CardContainer,
  BlogSection,
  Separator,
  BlogCardContainer,
} from "./main.styles";

import Card from "../card/card.component";
import BlogCard from "../blog-card/blog-card.component";
import CustomButton from "../custom-button/custom-button.component";

let cards = [
  {
    title: "Kuze's Drawings",
    imageUrl: "https://picsum.photos/700",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "Available Paintings",
    imageUrl: "https://picsum.photos/701",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "Prints",
    imageUrl: "https://picsum.photos/699",
    id: 3,
    linkUrl: "shop/sneakers",
  },
];

let blogCards = [
  {
    title: "Kuze's Drawings",
    imageUrl: "https://picsum.photos/702",
    id: 1,
    linkUrl: "shop/hats",
    date: "13/12/1980",
  },
  {
    title: "Available Paintings",
    imageUrl: "https://picsum.photos/703",
    id: 2,
    linkUrl: "shop/jackets",
    date: "14/1/1789",
  },
  {
    title: "Prints",
    imageUrl: "https://picsum.photos/704",
    id: 3,
    linkUrl: "shop/sneakers",
    date: "7/5/1410",
  },
];

const Main = () => (
  <MainContainer>
    <CardContainer>
      {cards.map(({ title, id, imageUrl }) => (
        <Card key={id} title={title} imgUrl={imageUrl} />
      ))}
    </CardContainer>

    <BlogSection>
      <Separator>Popular from the blog</Separator>
      <BlogCardContainer>
        {blogCards.map(({ title, id, imageUrl, date }) => (
          <BlogCard key={id} title={title} imgUrl={imageUrl} date={date} />
        ))}
      </BlogCardContainer>
      <CustomButton title="See All" />
    </BlogSection>
  </MainContainer>
);

export default Main;
