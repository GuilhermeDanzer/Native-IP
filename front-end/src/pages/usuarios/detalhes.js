import React, { useEffect, useState, useContext } from "react";
import socket from "../../context/socket";
import { Context as UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { Wrapper } from "../../components/Wrappers";
import { Input, Label } from "../../components/Input";
import { Title } from "../../components/Title";
import { Botao } from "../../components/Button";
import styled from "styled-components";

const DivForm = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  flex-direction: row;
`;
const DivInputs = styled.div`
  flex: 1 1 450px;
  margin: 10px;
`;
const Detalhes = () => {
  const router = useRouter();
  const { id } = router.query;
  const [actualUser, setActualUser] = useState({});
  const { getUser, updateUser, getAllUsersCity } = useContext(UserContext);
  const handleChange = (prop) => (event) => {
    setActualUser({ ...actualUser, [prop]: event.target.value });
  };

  const atualizarUsuario = async (usuario) => {
    await updateUser(usuario);
    const funcaoUsers = await getAllUsersCity();
    socket.emit("atualizar_dashboard", funcaoUsers);
    router.back();
  };

  useEffect(async () => {
    if (router.asPath !== router.route) {
      const usuario = await getUser(id);
      setActualUser(usuario);
    }
  }, [router]);

  return (
    <Wrapper>
      <Botao onClick={() => router.back()}>Voltar</Botao>
      <Title>Editar Usuário</Title>
      <DivForm>
        <DivInputs>
          <Label>Nome</Label>
          <Input
            type="text"
            defaultValue={actualUser.first_name}
            onChange={handleChange("first_name")}
          />
        </DivInputs>
        <DivInputs>
          <Label>Sobrenome</Label>
          <Input
            type="text"
            defaultValue={actualUser.last_name}
            onChange={handleChange("last_name")}
          />
        </DivInputs>
        <DivInputs>
          <Label>Email</Label>
          <Input
            type="text"
            defaultValue={actualUser.email}
            onChange={handleChange("email")}
          />
        </DivInputs>
        <DivInputs>
          <Label>Gênero</Label>
          <Input
            type="text"
            defaultValue={actualUser.gender}
            onChange={handleChange("gender")}
          />
        </DivInputs>
        <DivInputs>
          <Label>Cidade</Label>
          <Input
            type="text"
            defaultValue={actualUser.city}
            onChange={handleChange("city")}
          />
        </DivInputs>
        <DivInputs>
          <Label>Cargo</Label>
          <Input
            type="text"
            defaultValue={actualUser.title}
            onChange={handleChange("title")}
          />
        </DivInputs>
        <Botao onClick={() => atualizarUsuario(actualUser)}>Enviar</Botao>
      </DivForm>
    </Wrapper>
  );
};
export default Detalhes;
