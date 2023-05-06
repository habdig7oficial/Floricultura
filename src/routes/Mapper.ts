import type { Request, Response } from "express";

import ControllerIndex from "./index-api";

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
