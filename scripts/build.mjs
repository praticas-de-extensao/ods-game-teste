import { cp, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";

async function main() {
  await mkdir("dist", { recursive: true });

  if (existsSync("public")) {
    try {
      await cp("public", "dist", { recursive: true });
      console.log("✅ Copiado: public/ → dist/");
    } catch (e) {
      console.error("Erro copiando public → dist:", e?.message || e);
      process.exit(1);
    }
  } else {
    console.log("ℹ️ Pasta public/ não encontrada. Certifique-se de gerar build do seu engine para dist/.");
  }
}

main();
