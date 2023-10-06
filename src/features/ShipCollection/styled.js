import { styled, css } from "styled-components";
import { ReactComponent as FlipIcon } from "./flipIcon.svg";

export const Container = styled.div`
  align-items: center;
  border-radius: 8px;
  border: 1px solid white;
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
  font-weight: 300;
  margin: 5px;
  user-select: none;
`;
