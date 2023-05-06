import { app, port, UseDefault } from "./.config/server";
import { Get, Post } from "./.config/Mapper";

UseDefault();

app.listen(port, function () {
  console.log(
    `✔ - Funcionando em http://0.0.0.0:${port}`
  ); /* Garante que o server está funcionando */
});
