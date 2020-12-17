import styled from "styled-components";

export const TheButton = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  background-color: #857e7b;
  color: white;
  margin-bottom: 100px;
  animation: ${(props) =>
    props.animated ? "moveInButton 1s ease-out 3s" : ""};
  animation-fill-mode: backwards;

  @keyframes moveInButton {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    100% {
      opacity: 100%;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.3s;
    background-color: #857e7b;
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.7);
    opacity: 0;
  }
`;
