import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts', 'src'],
  splitting: false,
  dts: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
  tsconfig: './tsconfig.json',
  clean: true,
});
