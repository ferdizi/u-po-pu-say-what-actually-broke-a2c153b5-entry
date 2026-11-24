import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const entryPath = join(here, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt";
const outPath = outDir.endsWith("entry.txt") ? outDir : join(outDir, "entry.txt");

const text = readFileSync(entryPath, "utf8");

if (text.length < 1 || text.length > 200) {
  console.error(`entry must be 1-200 characters, got ${text.length}`);
  process.exit(1);
}

if (text.trim().length === 0) {
  console.error("entry must not be only whitespace");
  process.exit(1);
}

if (text.includes("\n") || text.includes("\r")) {
  console.error("entry must be a single line");
  process.exit(1);
}

if (text !== text.trim()) {
  console.error("entry must not carry leading or trailing padding");
  process.exit(1);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, text, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== text) {
  console.error("read-back mismatch: output differs from entry.txt");
  process.exit(1);
}

console.log(`wrote ${text.length} characters (limit 200) to ${outPath}`);
console.log(text);
