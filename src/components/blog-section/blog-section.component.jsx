import React from "react";
import BlogCard from "../blog-card/blog-card.component";
import CustomButton from "../custom-button/custom-button.component";

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

import {
  BlogPart,
  Separator,
  BlogCardContainer,
} from "./blog-section.styles.js";

const BlogSection = () => {
  return (
    <BlogPart>
      <Separator>Popular from the blog</Separator>
      <BlogCardContainer>
        {blogCards.map(({ title, id, imageUrl, date }) => (
          <BlogCard key={id} title={title} imgUrl={imageUrl} date={date} />
        ))}
      </BlogCardContainer>
      <CustomButton animated={true} title={"View All"} />
    </BlogPart>
  );
};

export default BlogSection;
