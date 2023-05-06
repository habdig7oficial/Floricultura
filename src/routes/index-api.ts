import type { Request, Response, } from "express";

export default function ControllerIndex(req: Request, res: Response) {
  res.send({
    teste: `teste`,
  });
}
