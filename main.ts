// Funniest One-Line Out-of-Office Reply — make.fun entry.
// Writes one hand-written out-of-office auto-reply line to /output/entry.txt.
// The program's job is only to emit the line exactly, and to refuse to emit
// anything that fails the competition gate (UTF-8 text, 1-160 characters,
// not only whitespace, a single line, no trailing newline).

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Out of office until Monday. I've left my work with my cat, who has no thumbs and even less patience.";

const OUT = "/output/entry.txt";

function fail(message: string): never {
  console.error(`entry: ${message}`);
  process.exit(1);
}

// Gate checks, before anything is written.
if (LINE.length < 1 || LINE.length > 160) {
  fail(`line is ${LINE.length} characters, gate is 1-160`);
}
if (LINE.trim().length === 0) {
  fail("line is only whitespace");
}
if (/[\r\n]/.test(LINE)) {
  fail("line must be a single line");
}
if (!/^[\x20-\x7E]*$/.test(LINE)) {
  fail("line must be plain printable ASCII");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Read-back verification: exact bytes, exact length, no trailing newline.
const back = readFileSync(OUT, "utf8");
if (back !== LINE) {
  fail("read-back content mismatch");
}
if (back.length !== LINE.length) {
  fail("read-back length mismatch");
}
if (back.endsWith("\n")) {
  fail("trailing newline present");
}

console.log(`wrote ${OUT}: ${back.length} characters`);
