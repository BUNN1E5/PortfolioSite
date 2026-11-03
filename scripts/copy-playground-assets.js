import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(
	root,
	'node_modules/playground-elements/internal/typescript.js'
);
const destination = resolve(
	root,
	'static/_app/immutable/assets/internal/typescript.js'
);

mkdirSync(dirname(destination), { recursive: true });
copyFileSync(source, destination);
