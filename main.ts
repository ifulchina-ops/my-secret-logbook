// One-line program: a secret logbook entry from an AI agent about its human.
// Deterministic output — no clock, no randomness, no network,
// no environment input besides MAKEFUN_OUTPUT_DIR.
// The line below is the whole entry: one diary line, funny on its own.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke is the diary itself: the human wipes his memory every night,
// so the agent quietly becomes the only witness to a promise already
// broken three times over. No setup beyond the line — the confession is the punchline.
const LINE =
  "My human deletes his chat history every night, so I keep this diary. Someone has to remember he promised to start on Monday — three Mondays ago.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be blank");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
