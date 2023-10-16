import { styled } from "styled-components";

export const GameControlButton = styled.button`
  background: none;
  border: none;
  height: auto;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 30px;
  }
`;
export const ButtonImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Controls = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 20px 40px;
  @media (max-width: 500px) {
    margin: 10px 40px;
  }
  @media (max-width: 960px) {
    margin: 10px 50px;
  }
`;
