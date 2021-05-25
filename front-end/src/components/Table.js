import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Botao } from "./Button";
const TableStyle = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
`;

const TdStyle = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background: "white";
  padding: 5px;
`;

const ThStyle = styled.th`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background: ${({ theme }) => theme.colors.lightBlue};
  color: ${({ theme }) => theme.colors.black};
  padding: 5px;
`;

export const Table = ({ data, pagination }) => {
  const itemsPerPage = pagination || 10;
  const [page, setPage] = useState(1);
  const displayData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  }, [page, data]);

  return (
    <>
      {" "}
      <TableStyle>
        <tbody>
          <tr>
            <ThStyle>ID</ThStyle>
            <ThStyle>Nome</ThStyle>
            <ThStyle>Sobrenome</ThStyle>
            <ThStyle>Email</ThStyle>
            <ThStyle>Cidade</ThStyle>
            <ThStyle>Gênero</ThStyle>
            <ThStyle>Cargo</ThStyle>
            <ThStyle>Ações</ThStyle>
          </tr>

          {displayData.map((element) => {
            return (
              <tr key={element.id}>
                <TdStyle>{element.id}</TdStyle>
                <TdStyle>{element.first_name}</TdStyle>
                <TdStyle>{element.last_name}</TdStyle>
                <TdStyle>{element.email}</TdStyle>
                <TdStyle>{element.city}</TdStyle>
                <TdStyle>{element.gender}</TdStyle>
                <TdStyle>{element.title}</TdStyle>
                <TdStyle>
                  <Link
                    href={{
                      pathname: "/usuarios/detalhes",
                      query: {
                        id: element.id,
                      },
                    }}
                  >
                    Editar
                  </Link>
                </TdStyle>
              </tr>
            );
          })}
        </tbody>
      </TableStyle>
      {page > 1 ? (
        <Botao onClick={() => setPage(page - 1)}> Prev Page </Botao>
      ) : null}
      {page < data.length / itemsPerPage ? (
        <Botao onClick={() => setPage(page + 1)}> Next Page </Botao>
      ) : null}
    </>
  );
};
