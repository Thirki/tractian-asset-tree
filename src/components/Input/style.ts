import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: ${(props) => `${props.theme.space.xxs} ${props.theme.space.sm}`};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.space.xs};

  border-bottom: ${({ theme }) =>
    `${theme.border.thin} ${theme.colors.gray200}`};
`;

export const InputElement = styled.input`
  border: none;
  width: 100%;
  padding: ${(props) => props.theme.space.xs};
`;
