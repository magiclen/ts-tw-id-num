import { checkOldResidentID } from "../src/lib";

describe("check", () => {
    it("should success", () => {
        expect(checkOldResidentID("FB3001429")).toBe(false);
        expect(checkOldResidentID("FB30014295")).toBe(false);

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
