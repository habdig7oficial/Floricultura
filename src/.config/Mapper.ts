import type { Request, Response } from "express";

import ControllerIndex from "../routes/index-api";

interface IRouterObj {
  path: string;
  ctrl: (arg0: Request, arg1: Response) => void;
}

export let Get: IRouterObj[] = [
  {
    path: `/`,
    ctrl: ControllerIndex,
  },
];

export let Post: IRouterObj[] = [];
