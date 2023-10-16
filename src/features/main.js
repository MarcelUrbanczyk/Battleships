import { styled } from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 0 20px;
  @media (max-width: 960px) {
    flex-direction: column;
    max-width: 400px;
  }
  @media (max-width: 460px) {
    padding: 0;
  }
`;
