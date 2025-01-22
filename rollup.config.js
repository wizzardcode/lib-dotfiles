import path from "path"
import { fileURLToPath } from "url"
import dts from "rollup-plugin-dts"
import license from "rollup-plugin-license"
import { terser } from "rollup-plugin-terser"
import typescript from "rollup-plugin-typescript2"

import alias from "@rollup/plugin-alias"
import resolve from "@rollup/plugin-node-resolve"

// Эмулируем __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
	{
		input: "src/index.ts",
		output: [{ file: "./dist/index.esm.js", format: "es", sourcemap: true }],
		plugins: [
			typescript({ tsconfig: "./tsconfig.json" }),
			terser(),
			license({ banner: { content: { file: path.join("./LICENSE") } } }),
		],
	},
	{
		input: "src/index.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [
			alias({
				entries: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
			}),
			resolve(),
			dts(),
		],
	},
]
