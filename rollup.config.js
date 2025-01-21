import typescript from "rollup-plugin-typescript2"
import dts from "rollup-plugin-dts"
import { terser } from "rollup-plugin-terser"
import license from "rollup-plugin-license"

export default [
	{
		input: "src/index.ts",
		output: [{ file: "./dist/index.esm.js", format: "es", sourcemap: true }],
		plugins: [
			typescript({ tsconfig: "./tsconfig.json" }),
			terser(),
			license({
				banner: `
				  MIT License
				  
				  Copyright (c) 2025 Vladimir Vladimirovich Volkov
		
				  Permission is hereby granted, free of charge, to any person obtaining a copy
				  of this software and associated documentation files (the "Software"), to deal
				  in the Software without restriction, including without limitation the rights
				  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
				  copies of the Software, and to permit persons to whom the Software is
				  furnished to do so, subject to the following conditions:
		
				  The above copyright notice and this permission notice shall be included in all
				  copies or substantial portions of the Software.
		
				  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
				  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
				  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
				  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
				  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
				  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
				  SOFTWARE.
				`,
			}),
		],
	},
	{
		input: "src/index.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts()],
	},
]
