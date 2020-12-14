import styled from "styled-components";

export const TheCard = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  justify-self: flex-start;
  margin-top: auto;
  margin-bottom: 1rem;
  border: 2px solid #fff;
  box-shadow: 10px 10px 5px #ccc;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 300;
`;

export const PostDate = styled.p`
  text-align: center;
  font-size: 0.8rem;
  padding-top: 0.5rem;
  font-weight: 400;
`;
