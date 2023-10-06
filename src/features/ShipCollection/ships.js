import { styled, css } from "styled-components";

export const Destroyer = styled.div`
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  height: 10px;
  padding: 2px;
  transition: 0.3s;
  width: 40px;
  ${({ flipped }) =>
    flipped &&
    css`
      transform: rotate(-90deg);
    `}
`;

export const Thunder = styled(Destroyer)`
  width: 50px;
`;

export const Wrecker = styled(Destroyer)`
  width: 30px;
`;

export const Liberty = styled(Wrecker)``;

export const Sapphire = styled(Destroyer)`
  width: 20px;
`;
