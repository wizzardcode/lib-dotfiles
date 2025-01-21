import { core } from "./core"

describe("[CORE]", () => {
	test("ping", () => {
		expect(core()).toBe(1)
	})
})
