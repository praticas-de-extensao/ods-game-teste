import { readFile } from "node:fs/promises";
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true, strict: false });

async function main() {
  try {
    const schema = JSON.parse(await readFile(new URL("../schemas/game.schema.json", import.meta.url)));
    const data = JSON.parse(await readFile(new URL("../game.json", import.meta.url)));

    const validate = ajv.compile(schema);
    const ok = validate(data);
    if (!ok) {
      console.error("❌ game.json inválido:");
      console.error(validate.errors);
      process.exit(1);
    }
    console.log("✅ game.json válido.");
  } catch (e) {
    console.error("Erro validando game.json:", e?.message || e);
    process.exit(1);
  }
}

main();
