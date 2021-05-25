import React from "react";
import styled from "styled-components";

const CardBody = styled.div`
  background-color: ${({ theme }) => theme.colors.pearl};
  width: 250px;
  height: 140px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 10px;
  align-content: center;
  border-radius: 10px;
  cursor: pointer;
  justify-content: space-around;
  cursor: pointer;
`;
export const Cards = ({ city, n_users, onClick }) => {
  return (
    <CardBody onClick={onClick}>
      <h4> {city}</h4>
      <p>Usuarios: {n_users}</p>
    </CardBody>
  );
};
