import { styled } from "styled-components";

export const Header = styled.h1`
  color: white;
  font-family: "Montserrat";
  font-size: 72px;
  font-weight: 300;
  text-align: center;
  user-select: none;
  @media (max-width: 1250px) {
    font-size: 60px;
  }
  @media (max-width: 500px) {
    font-size: 50px;
  }
`;
