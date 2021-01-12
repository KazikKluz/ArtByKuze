import React from "react";

import { Container, Paragraph, Heading, InnerBox } from "./cta.styles";

const Cta = () => {
  return (
    <Container>
      <InnerBox>
        <Heading>EXPLORE MORE</Heading>
        <Paragraph>&#10095; &emsp; PAINTINGS</Paragraph>
        <Paragraph>&#10095; &emsp; DRAWINGS</Paragraph>
        <Paragraph>&#10095; &emsp; EXHIBITION</Paragraph>
        <Paragraph>&#10095; &emsp; BLOG</Paragraph>
        <Paragraph>&#10095; &emsp; CONTACT</Paragraph>
      </InnerBox>
      <InnerBox>
        <Heading>ABOUT KUZE</Heading>
        <Paragraph>
          My name is Ausrine Kuze. I am an artist originally from Lithuania. I
          have drawn ever since childhood and it has been a lifelong passion. I
          eventually pursued studying art at the third level and graduated from
          Art Academy with a Bachelor`&#39`s degree in Glasswork studies. I
          moved to Dublin ten years ago where I studied illustration at
          Ballyfermot College of Further Education.
        </Paragraph>
      </InnerBox>
      <InnerBox>
        <Heading>LATEST POSTS</Heading>
        <Paragraph>
          Small Paintings Now Available
          <br />
          <span style={{ fontSize: "0.65rem", letterSpacing: "-0.5px" }}>
            29th November 2020
          </span>
        </Paragraph>
        <Paragraph>
          Kuze - International Artist :)
          <br />
          <span style={{ fontSize: "0.65rem", letterSpacing: "-0.5px" }}>
            9th October 2020
          </span>
        </Paragraph>
        <Paragraph>
          Quality Time
          <br />
          <span style={{ fontSize: "0.65rem", letterSpacing: "-0.5px" }}>
            26th April 2020
          </span>
        </Paragraph>
      </InnerBox>
      <InnerBox>
        <Heading>SHOP</Heading>
        <Paragraph>&#10095; &emsp;Original Paintings</Paragraph>
        <Paragraph>&#10095; &emsp;Drawings</Paragraph>
        <Paragraph>&#10095; &emsp;Prints</Paragraph>
      </InnerBox>
    </Container>
  );
};

export default Cta;
