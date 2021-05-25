import styled from "styled-components";

export const Botao = styled.button`
  width: 250px;
  padding: 20px;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  font-size: 16px;
  margin: 10px;
`;
