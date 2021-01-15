import React from "react";

import { MainContainer, CardContainer } from "./main.styles";

import Card from "../card/card.component";
import BlogSection from "../blog-section/blog-section.component";
import Testimonials from "../testimonials/testimonials.component";
import Cta from "../cta/cta.component";
import Footer from "../footer/footer.component";
import SocialButtons from "./socialButtons"

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

const Main = () => (
  <MainContainer>
    <CardContainer>
      {cards.map(({ title, id, imageUrl }) => (
        <Card key={id} title={title} imgUrl={imageUrl} />
      ))}
    </CardContainer>
    <SocialButtons />
    <BlogSection />
    <Testimonials />
    <Cta />
    <Footer />
  </MainContainer>
);

export default Main;
