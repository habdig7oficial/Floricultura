import type { Request, Response } from "express";

import card_flores_type from "../types/card-index";

interface flores {
  src?: string;
  alt?: string;
  title?: string;
  text?: string;
}

export default function CtrlIndex(req: Request, res: Response) {
  let flores: flores[] = [
    {
      src: `teste123`,
      alt: `Teste Api Work`,
      title: `Teste Api`,
      text: `Teste Api`,
    },

    {
      src: `teste123`,
      alt: `Hello`,
      title: `World`,
      text: `from express`,
    },
  ];

  let av_buf: Array<Buffer> = [];

  for (let i = 0; i < flores.length; i++) {
    av_buf.push(card_flores_type.toBuffer(flores[i]));
  }

  console.log(av_buf);

  res.send(av_buf);
}
