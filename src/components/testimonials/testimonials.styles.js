import styled from "styled-components";

export const Box = styled.div`
  background-image: url("https://picsum.photos/1600/1900");

  /* Set a specific height */
  height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
`;
