import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One toaster error message for "The Funniest Toaster Error Message": the
// toaster confesses, deadpan, that the browning dial never did anything and
// it has been guessing since 2019. A real numbered error, a real appliance
// truth, and a surprise no toaster pun ever reaches.
const LINE =
  "Error 7: The dial has never done anything. I have been guessing since 2019.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output';

// The sealed gate refuses anything outside 1-120 characters or only
// whitespace, so fail loudly here rather than ship an invalid entry.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`message fails the gate: ${LINE.length} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

// No trailing newline: the gate counts characters (1-120) and ties break on
// fewer bytes, so the entry is exactly the message, nothing more.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
