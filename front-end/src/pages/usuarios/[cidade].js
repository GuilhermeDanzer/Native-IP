import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Table } from "../../components/Table";
import { Title } from "../../components/Title";
import { DashboardWrapper, Wrapper } from "../../components/Wrappers";
import { Context as UserContext } from "../../context/UserContext";
import { Botao } from "../../components/Button";

const tabelaUsuario = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const { cidade } = router.query;
  const { getUsersCity } = useContext(UserContext);
  console.log(cidade);
  useEffect(async () => {
    if (router.asPath !== router.route) {
      const usuarios = await getUsersCity(cidade);
      setData(usuarios);
    }
  }, [router]);
  return (
    <Wrapper>
      <Botao onClick={() => router.back()}>Voltar</Botao>
      <Title>Usuários</Title>

      <Table data={data} pagination={4} />
    </Wrapper>
  );
};

export default tabelaUsuario;
