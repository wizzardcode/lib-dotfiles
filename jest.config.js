export default {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleFileExtensions: ["ts", "js"],
	transform: {
		"^.+\\.ts$": [
			"ts-jest",
			{
				tsconfig: "tsconfig.json",
			},
		],
	},
	testMatch: ["**/src/**/*.(test|spec).ts"],
	testPathIgnorePatterns: ["/node_modules/"],
	moduleNameMapper: { "^src/(.*)$": "<rootDir>/src/$1" },
}
