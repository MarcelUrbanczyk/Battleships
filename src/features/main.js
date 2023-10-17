import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 0 20px;
  @media (max-width: 1150px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
`;
