import { checkOldResidentID } from "../src/lib";

describe("check", () => {
    it("should success", () => {
        expect(checkOldResidentID("HD1234567")).toBe(false);
        expect(checkOldResidentID("HD12345677")).toBe(false);
        expect(checkOldResidentID("hd12345677")).toBe(false);

        expect(checkOldResidentID("HD12345678")).toBe(true);
        expect(checkOldResidentID("FB30014296")).toBe(true);
        expect(checkOldResidentID("JC00779341")).toBe(true);
        expect(checkOldResidentID("HC04351464")).toBe(true);
        expect(checkOldResidentID("FA20174998")).toBe(true);
        expect(checkOldResidentID("XA00045953")).toBe(true);
        expect(checkOldResidentID("XA00159292")).toBe(true);
        expect(checkOldResidentID("XA00159292")).toBe(true);
        expect(checkOldResidentID("AD30344403")).toBe(true);
    });
});
