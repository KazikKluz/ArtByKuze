import styled from "styled-components";

export const TheCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
`;

export const ImageContainer = styled.div`
  justify-self: flex-start;
  margin-top: 35px;
  margin-bottom: auto;
  border: 2px solid #fff;
  box-shadow: 10px 10px 5px #ccc;
  img {
    width: 100%;
    height: 100%;
  }
`;
