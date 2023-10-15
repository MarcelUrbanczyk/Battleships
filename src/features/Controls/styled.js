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
