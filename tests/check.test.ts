import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { check } from "../src/index.ts";
import { INVALID_IDS, NATIONAL_IDS, OLD_RESIDENT_IDS, RESIDENT_IDS } from "./data.ts";

describe("check", () => {
    it("allows national and resident ID numbers by default", () => {
        for (const id of INVALID_IDS) {
            assert.equal(check(id), false, id);
        }

        for (const id of [...NATIONAL_IDS, ...RESIDENT_IDS]) {
            assert.equal(check(id), true, id);
        }

        for (const id of OLD_RESIDENT_IDS) {
            assert.equal(check(id), false, id);
        }
    });

    it("checks national ID numbers", () => {
        for (const id of INVALID_IDS) {
            assert.equal(check(id, "national"), false, id);
        }

        for (const id of NATIONAL_IDS) {
            assert.equal(check(id, "national"), true, id);
        }

        for (const id of RESIDENT_IDS) {
            assert.equal(check(id, "national"), false, id);
        }
    });

    it("checks resident ID numbers", () => {
        for (const id of INVALID_IDS) {
            assert.equal(check(id, "resident"), false, id);
        }

        for (const id of NATIONAL_IDS) {
            assert.equal(check(id, "resident"), false, id);
        }

        for (const id of RESIDENT_IDS) {
            assert.equal(check(id, "resident"), true, id);
        }
    });

    it("checks old resident ID numbers", () => {
        assert.equal(check("HD1234567", "old-resident"), false);
        assert.equal(check("HD12345677", "old-resident"), false);
        assert.equal(check("hd12345677", "old-resident"), false);
        assert.equal(check("A123456789", "old-resident"), false);

        for (const id of OLD_RESIDENT_IDS) {
            assert.equal(check(id, "old-resident"), true, id);
        }
    });

    it("allows multiple types", () => {
        for (const id of [...NATIONAL_IDS, ...RESIDENT_IDS, ...OLD_RESIDENT_IDS]) {
            assert.equal(check(id, ["national", "resident", "old-resident"]), true, id);
        }
    });
});
