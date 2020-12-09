import React from "react";

import Card from "../card/card.component";
import BlogCard from "../blog-card/blog-card.component";

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

import "./main.styles.scss";

const Main = () => (
  <div className="main">
    <div className="container">
      {cards.map(({ title, id, imageUrl }) => (
        <Card key={id} title={title} imgUrl={imageUrl} />
      ))}
    </div>

    <div className="blog-section">
      <div className="separator">Popular from the blog</div>
      <div className="container">
        {blogCards.map(({ title, id, imageUrl }) => (
          <BlogCard key={id} title={title} imgUrl={imageUrl} />
        ))}
      </div>
    </div>
  </div>
);

export default Main;
