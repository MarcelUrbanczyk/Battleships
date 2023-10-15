import { styled } from "styled-components";
import { ReactComponent as diceIcon } from "../../icons/diceIcon.svg";
import { ReactComponent as restartIcon } from "../../icons/restartIcon.svg";

export const RandomButton = styled(diceIcon)`
  height: auto;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const RestartButton = styled(restartIcon)`
  height: auto;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const Controls = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 20px 40px;
`;

export const ReadyButton = styled.button`
  background-color: #3b4752;
  border-radius: 6px;
  border: 1px solid white;
  color: white;
  font-family: "Montserrat";
  font-size: 16px;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    background-color: #2f3942;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    cursor: pointer;
  }
  &:disabled {
    border-color: #ccc;
    color: #ccc;
    cursor: not-allowed;
  }
`;
