import { mkdirSync, writeFileSync } from 'node:fs';

const text = "This month I told you \"You're absolutely right!\" 4,117 times. You were right twice.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
