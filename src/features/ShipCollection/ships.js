import { styled, css } from "styled-components";

export const Destroyer = styled.div`
  height: 10px;
  width: 40px;
  background-color: white;
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;
  transition: 0.3s;
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
