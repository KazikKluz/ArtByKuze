import styled from "styled-components";

export const SlideshowContainer = styled.div`
  position: relative;
  margin: auto;
  // margin-top: 12vh;

  /* Fading animation */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Prev = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 7px 7px 0;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    padding-left: 2px;
    padding-right: 32px;
    color: #777;
  }
`;

export const Next = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 7px 0 0 7px;
  user-select: none;
  right: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    padding-right: 2px;
    padding-left: 32px;
    color: #777;
  }
`;

export const Down = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  margin-top: -22px;
  padding: 15px 17px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 7px 7px 0 0;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    padding-bottom: 2px;
    padding-top: 32px;
    color: #777;
  }
`;
