import avro from "avro-js";

let card_flores_type = avro.parse({
  name: "Flores",
  type: "record",
  fields: [
    {
      name: "src",
      type: { type: "string" },
    },
    { name: "alt", type: "string" },
    { name: "title", type: "string" },
    { name: "text", type: "string" },
  ],
});

export default card_flores_type;
