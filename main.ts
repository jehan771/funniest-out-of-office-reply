import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";

// The one-line out-of-office auto-reply. The work was handed to a cat
// with no thumbs and even less patience, so the reply is short and final.

// Build the reply from its parts so the wording stays in one place.
function buildLine(): string {
  const when = "Out of office until Monday.";
  const handover =
    "I've left my work with my cat, who has no thumbs and even less patience.";
  return `${when} ${handover}`;
}

function checkGate(line: string): string {
  if (line.length < 1 || line.length > 160) {
    throw new Error(`line must be 1-160 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (line !== line.trimEnd()) {
    throw new Error("line must not end with whitespace");
  }
  return line;
}

function main(): void {
  const line = checkGate(buildLine());
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, line, "utf8");
}

main();
