import { styled } from "styled-components";
import { ReactComponent as diceIcon } from "../../../icons/diceIcon.svg";
import { ReactComponent as restartIcon } from "../../../icons/restartIcon.svg";

export const Block = styled.div`
  background-color: teal;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  height: 40px;
  transition: 0.3s;
  width: 40px;
  &:hover {
    background-color: #006666;
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  flex-wrap: wrap;
  margin: 20px 40px 40px;
  width: 400px;
  &:hover {
    cursor: crosshair;
  }
`;

export const Owner = styled.p`
  color: white;
  font-size: 36px;
  margin: 10px;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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

export const Buttons = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 20px;
  padding: 0 40px;
  width: 100%;
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
