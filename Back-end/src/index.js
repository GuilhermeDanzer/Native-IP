const usuarios = require("./users.json");
const User = require("./model/User");
const db = require("./db");
const mysql = require("mysql2/promise");
const userRoute = require("./routes/UserRoute");
const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const config = require("./config.json");

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(userRoute);
const aplicacao = server.listen(8080, () => {
  console.log("Listening on 8080");
});

io.on("connection", (socket) => {
  socket.on("atualizar_dashboard", (data) => {
    io.emit("atualizar_dashboard", data);
  });
});

const Iniciar = async () => {
  try {
    const { host, port, user, password, database } = config;
    const connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    await db.sync();
    await User.bulkCreate(usuarios, { ignoreDuplicates: true });
  } catch (error) {
    console.log(error);
  }
};
Iniciar();

module.exports = aplicacao;
