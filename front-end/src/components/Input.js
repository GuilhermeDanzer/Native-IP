import styled from "styled-components";

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
`;
export const Input = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  outline: none;
  border-radius: 10px;
  margin: 5px;
`;
