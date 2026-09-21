import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { parse } from "../src/index.ts";

describe("parse", () => {
    it("parses national ID numbers", () => {
        assert.deepEqual(parse("A123456789"), { type: "national", sex: "male", location: "A" });
        assert.deepEqual(parse("A223456781"), { type: "national", sex: "female", location: "A" });
    });

    it("parses resident ID numbers", () => {
        assert.deepEqual(parse("A800000014"), { type: "resident", sex: "male", location: "A" });
        assert.deepEqual(parse("A900000016"), { type: "resident", sex: "female", location: "A" });
    });

    it("parses old resident ID numbers", () => {
        assert.deepEqual(parse("FA20174998"), { type: "old-resident", sex: "male", location: "F" });
        assert.deepEqual(parse("FB30014296"), {
            type: "old-resident",
            sex: "female",
            location: "F",
        });
        assert.deepEqual(parse("HC04351464"), { type: "old-resident", sex: "male", location: "H" });
        assert.deepEqual(parse("HD12345678"), {
            type: "old-resident",
            sex: "female",
            location: "H",
        });
    });

    it("returns null for invalid ID numbers", () => {
        assert.equal(parse("A123456788"), null);
    });
});
