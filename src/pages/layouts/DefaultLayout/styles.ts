import styled from "styled-components";

export const PageWrapper = styled.section`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  @media (max-width: 769px) {
    height: 150vh;
  }
`;
