import { Title } from "../components/Title";
import React, { useEffect, useState, useContext } from "react";
import socket from "../context/socket";
import { Context as UserContext } from "../context/UserContext";
import { Cards } from "../components/Cards";
import { Wrapper, DashboardWrapper } from "../components/Wrappers";
import { useRouter } from "next/router";

socket.on("connect", () => console.log(""));

const Home = () => {
  const [socketState, setState] = useState();
  const { getAllUsersCity } = useContext(UserContext);
  const router = useRouter();
  useEffect(async () => {
    const funcaoUsers = await getAllUsersCity();
    socket.emit("atualizar_dashboard", funcaoUsers);
    socket.on("atualizar_dashboard", (data) => setState(data));
  }, []);
  return (
    <Wrapper>
      <Title>Dashboard</Title>
      <DashboardWrapper>
        {socketState
          ? socketState.map((element) => {
              return (
                <>
                  <Cards
                    city={element.city}
                    n_users={element.n_users}
                    key={element.city}
                    onClick={() => router.push(`/usuarios/${element.city}`)}
                  />
                </>
              );
            })
          : null}
      </DashboardWrapper>
    </Wrapper>
  );
};

export default Home;
