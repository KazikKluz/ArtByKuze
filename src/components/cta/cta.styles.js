import styled from "styled-components";

export const Container = styled.div`
  background-color: #510860;
  width: 100%;
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #fff;
  text-align: center;
  padding: 60px;
`;

export const InnerBox = styled.div`
  margin: 60px auto;
  width: 25%;
  height: 5rem;
`;
