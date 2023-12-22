import * as aq from "arquero";
import fs from "node:fs/promises";

async function make1() {
  const dt = (
    await aq.loadCSV("./in/suessmilch.tsv", { delimiter: "\t" })
  ).fold(aq.not("Todesursache"), { as: ["Altersgruppe", "value"] });

  dt.print();

  await fs.writeFile("./out/suessmilch.csv", dt.toCSV(), {
    encoding: "utf-8",
  });
}

async function make2() {
  const dt = (await aq.loadCSV("./in/euler.tsv", { delimiter: "\t" })).fold(
    aq.not("Jahr"),
    { as: ["Kategorie", "value"] }
  );

  dt.print();

  await fs.writeFile("./out/euler.csv", dt.toCSV(), {
    encoding: "utf-8",
  });
}

async function make3() {
  const dt = (await aq.loadCSV("./in/clubofrome.tsv", { delimiter: "\t" }))
    .fold(aq.not("Jahr"), { as: ["Kategorie", "value"] })
    .derive({
      value: (d) => aq.op.parse_float(aq.op.replace(d.value, /,/, ".")),
    });

  dt.print();

  await fs.writeFile("./out/clubofrome.csv", dt.toCSV(), {
    encoding: "utf-8",
  });
}

await Promise.all([make1(), make2(), make3()]);
