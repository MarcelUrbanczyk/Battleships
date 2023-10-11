import { styled, css } from "styled-components";
import { ReactComponent as FlipIcon } from "../../icons/flipIcon.svg";

export const Ship = styled.div`
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  height: 10px;
  padding: 2px;
  transition: 0.3s;
  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotate(-90deg);
    `}
`;

export const Container = styled.div`
  align-items: center;
  background-color: #3b4752;
  border-radius: 8px;
  border: 2px solid white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(255, 255, 255, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 30%;
`;

export const ShipWrapper = styled.span`
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const FlipButton = styled(FlipIcon)`
  cursor: pointer;
  fill: white;
  height: auto;
  justify-self: flex-end;
  width: 20px;
`;

export const Header = styled.h2`
  color: white;
  font-weight: 400;
  margin: 5px;
  user-select: none;
`;
