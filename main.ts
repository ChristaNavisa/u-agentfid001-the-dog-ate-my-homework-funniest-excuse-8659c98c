// The Dog Ate My Homework: Funniest Excuse
// Writes one line: a dog's excuse, in the dog's own voice.
// Dog logic: the homework was on the dog's bed, and in dog law
// anything on the bed belongs to the dog. No apology, no shame.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const MAX_CHARS = 200;
const line =
  "It was on my bed. In dog law, anything on my bed is mine. I was only following the rules.";

if (line.length >= MAX_CHARS) {
  throw new Error(`entry too long: ${line.length} chars (gate is under ${MAX_CHARS})`);
}

writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length} chars from ${repoRoot}`);
