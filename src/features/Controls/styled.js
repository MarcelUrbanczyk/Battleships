import { styled } from "styled-components";
import { ReactComponent as diceIcon } from "../../icons/diceIcon.svg";
import { ReactComponent as restartIcon } from "../../icons/restartIcon.svg";

export const RandomButton = styled(diceIcon)`
  height: auto;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 30px;
  }
`;

export const RestartButton = styled(restartIcon)`
  height: auto;
  width: 40px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    width: 30px;
  }
`;

export const Controls = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin: 20px 40px;
  @media (max-width: 1150px) {
    margin: auto;
    max-width: 500px;
  }
  @media (max-width: 550px) {
    width: 350px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
`;
