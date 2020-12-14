import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

const Container = css`
  padding: 35px;
  max-height: 490px;
  max-width: 1190px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 35px;
`;

export const CardContainer = styled.div`
  ${Container}
`;

export const BlogSection = styled.div`
  background-color: #f7f7f7;
`;

export const Separator = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  padding: 50px 100px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid grey;
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
`;

export const BlogCardContainer = styled.div`
  ${Container}
`;
