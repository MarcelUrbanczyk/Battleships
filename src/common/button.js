import { styled } from "styled-components";

export const Button = styled.button`
  background-color: #3b4752;
  border-radius: 6px;
  border: none;
  color: white;
  font-family: "Montserrat";
  font-size: 16px;
  padding: 10px;
  transition: 0.3s;
  max-width: 200px;
  align-self: center;
  &:hover {
    background-color: #2f3942;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    cursor: pointer;
  }
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
  @media (max-width: 500px) {
    padding: 6px;
    font-size: 12px;
  }
`;
