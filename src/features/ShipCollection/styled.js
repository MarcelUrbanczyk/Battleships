import { styled, css } from "styled-components";
import { ReactComponent as FlipIcon } from "./flipIcon.svg";

export const Container = styled.div`
  padding: 30px;
  border-radius: 8px;
  border: 1px solid white;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShipWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FlipButton = styled(FlipIcon)`
  fill: white;
  width: 20px;
  height: auto;
  justify-self: flex-end;
  cursor: pointer;
`;

export const Header = styled.h2`
  color: white;
  font-weight: 300;
  margin: 5px;
  user-select: none;
`;
