import express from "express";
import helmet from "helmet"; /* Lib pra proteger o site contra vunerabilidades conhecidas, recomendado pela documentação: https://expressjs.com/pt-br/advanced/best-practice-security.html */
import compression from "compression"; /* Lib pra melhorar a performace com o gzip comprimindo dados, recomendado pela documentação: https://expressjs.com/pt-br/advanced/best-practice-performance.html*/
import cors from "cors"; /* Lib para trabalhar como api para requisições externas */

import type { Express } from "express";
import type CorsOpt from "../types/CorsOpt";

import { Get, Post } from "./Mapper";

/* */

export let app: Express = express();

export let port: number = parseInt(`${process.env.PORT}`) || 7778;

/* */

export function UseSecurity() {
  app.use(helmet());
  app.disable("x-powered-by");
}

export function UsePerformace() {
  app.use(compression());
}

let CorsOpt: CorsOpt = {
  origin: `*`,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export function UseCors() {
  app.use(cors(CorsOpt));
  console.log(Get);
}

export function LoadRoutes() {
  for (let i = 0; i < Get.length; i++) {
    console.log(`Get - ${Get[i].path}`);
    app.get(Get[i].path, Get[i].ctrl);
  }

  for (let i = 0; i < Post.length; i++) {
    console.log(`Post - ${Post[i].path}`);
    app.get(Post[i].path, Post[i].ctrl);
  }
}

/* */

export function UseDefault() {
  UseSecurity();
  UsePerformace();
  UseCors();
  LoadRoutes();
}
