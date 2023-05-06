import type { Request, Response } from "express";

interface flores {
  src?: string;
  alt?: string;
  title?: string;
  text?: string;
}

export default function CtrlIndex(req: Request, res: Response) {
  let flores: flores[] = [
    {
      src: ``,
      alt: `Teste Api Work`,
      title: `Teste Api`,
      text: `Teste Api`,
    },

    {
      src: ``,
      alt: `Hello`,
      title: `World`,
      text: `from express`,
    },
  ];

  res.send(flores);
}
