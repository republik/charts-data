import * as aq from "arquero";
import fs from "node:fs/promises";

async function make1() {
  const dt = (
    await aq.loadCSV("./in/bloch.tsv", {
      delimiter: "\t",
      header: false,
      names: ["Krieg", "Nation", "Getötet", "Verwundet"],
    })
  )
    .derive({ Krieg: aq.op.fill_down("Krieg") })
    .fold(aq.not(["Krieg", "Nation"]), { as: ["Kategorie", "value"] })
    .derive({
      value: (d) => aq.op.parse_float(aq.op.replace(d.value, /,/, ".")),
    });

  dt.print();

  await fs.writeFile("./out/bloch.csv", dt.toCSV(), {
    encoding: "utf-8",
  });
}

async function make2() {
  const dt = (
    await aq.loadCSV("./in/ibc.csv", {
      // delimiter: "\t",
    })
  )
    .fold(aq.not(["Month starting"]), { as: ["dataset", "value"] })
    .derive({
      dataset: (d) =>
        d.dataset === "dataset 1" ? "Getötete" : "Getötete (vorläufige Daten)",
      month: (d) =>
        aq.op.replace(
          aq.op.format_date(aq.op.parse_date(d["Month starting"]), true),
          /T.+$/,
          ""
        ),
    })
    .select(aq.not("Month starting"));

  dt.print();

  await fs.writeFile("./out/ibc.csv", dt.toCSV(), {
    encoding: "utf-8",
  });
}

await Promise.all([make1(), make2()]);
