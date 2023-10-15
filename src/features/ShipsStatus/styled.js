import { styled } from "styled-components";

export const Ships = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  gap: 14px;
  @media (max-width: 1250px) {
    margin: 0;
  }
`;

export const Ship = styled.li`
  color: white;
  font-size: 16px;
  @media (max-width: 1250px) {
    font-size: 14px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
