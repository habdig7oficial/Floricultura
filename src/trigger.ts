/* Libs Imports */
import express from "express";
import helmet from "helmet"; /* Lib pra proteger o site contra vunerabilidades conhecidas, recomendado pela documentação: https://expressjs.com/pt-br/advanced/best-practice-security.html */
import compression from "compression"; /* Lib pra melhorar a performace com o gzip comprimindo dados, recomendado pela documentação: https://expressjs.com/pt-br/advanced/best-practice-performance.html*/
//import Cors from "cors"; 

/* Types Imports */
import type { Express } from "express";

/* Routes Imports */
import { Get } from "./routes/Mapper";

class Server {
  readonly app: Express;

  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
  }

  public UseSecurity() {
    this.app.use(helmet());
  }

  public UsePerformace() {
    this.app.use(compression());
  }

  public UseCors(){

  }

  public SetDefault() {
    this.UseSecurity();
    this.UsePerformace();
    this.LoadRoutes();
  }

  public LoadRoutes() {
    for (let i = 0; i < Get.length; i++) {
      this.app.get(Get[i].path, Get[i].ctrl);
    }
  }

  public Run() {
    this.app.listen(this.port, function () {
      console.log(`✔ - Funcionando em http://0.0.0.0:${instance.port}`);
    });
  }
}

let instance = new Server(7778);

instance.SetDefault();
instance.Run();
