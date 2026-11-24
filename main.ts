// The Dog Ate My Homework: Funniest Excuse
// Writes one line to /output/entry.txt: the excuse a dog gives after
// being caught eating the homework, in the dog's own voice.
//
// The dog's logic: the homework was on its bed, and dog law says
// anything on the bed belongs to the dog. So it did nothing wrong —
// and, naturally, it would like a treat now.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "It was on my bed. In dog law, that's mine. I did nothing wrong, and I would like a treat now.";

function main(): void {
  const chars = [...EXCUSE].length;
  if (chars < 1 || chars > 200 || EXCUSE.trim().length === 0) {
    throw new Error(`entry fails gate: ${chars} chars (need 1-200, non-blank)`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
  console.log(`wrote entry.txt: ${chars} chars`);
}

main();
