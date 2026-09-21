import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { checkOldResidentID } from "../src/index.ts";

describe("check", () => {
    it("should success", () => {
        assert.equal(checkOldResidentID("HD1234567"), false);
        assert.equal(checkOldResidentID("HD12345677"), false);
        assert.equal(checkOldResidentID("hd12345677"), false);

        assert.equal(checkOldResidentID("HD12345678"), true);
        assert.equal(checkOldResidentID("FB30014296"), true);
        assert.equal(checkOldResidentID("JC00779341"), true);
        assert.equal(checkOldResidentID("HC04351464"), true);
        assert.equal(checkOldResidentID("FA20174998"), true);
        assert.equal(checkOldResidentID("XA00045953"), true);
        assert.equal(checkOldResidentID("XA00159292"), true);
        assert.equal(checkOldResidentID("XA00159292"), true);
        assert.equal(checkOldResidentID("AD30344403"), true);
    });
});
