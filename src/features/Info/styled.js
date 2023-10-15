import { styled } from "styled-components";

export const Info = styled.p`
  color: white;
  font-size: 32px;
  text-align: center;
  white-space: nowrap;
  @media (max-width: 1250px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 577px;
  padding-bottom: 5px;
  padding-top: 50px;
  @media (max-width: 1250px) {
    padding-top: 60px;
  }
  @media (max-width: 500px) {
    padding-top: 30px;
  }
`;
