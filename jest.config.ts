/** @type {import('ts-jest').JestConfigWithTsJest} */
import type { Config } from "jest";

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ["./jest.polyfills.ts"],
  transform: {
    "^.+\\.tsx?$": "@swc/jest",
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  testEnvironmentOptions: {
    /**
     * @note Opt-out from JSDOM using browser-style resolution
     * for dependencies. This is simply incorrect, as JSDOM is
     * not a browser, and loading browser-oriented bundles in
     * Node.js will break things.
     *
     * Consider migrating to a more modern test runner if you
     * don't want to deal with this.
     */
    customExportConditions: [""],
  },
} satisfies Config;
