import { check, generate, Mode } from "../src/lib.js";

describe("check", () => {
    it("should success (Default mode)", () => {
        expect(check("A12345678")).toBe(false);
        expect(check("A123456788")).toBe(false);
        expect(check("a123456789")).toBe(false);

        expect(check("A123456789")).toBe(true);
        expect(check("A223456781")).toBe(true);
        expect(check("A172571595")).toBe(true);
        expect(check("B181009370")).toBe(true);
        expect(check("C169458754")).toBe(true);
        expect(check("D196831313")).toBe(true);
        expect(check("E178155482")).toBe(true);
        expect(check("F138163250")).toBe(true);
        expect(check("G184812936")).toBe(true);
        expect(check("H127931619")).toBe(true);
        expect(check("J165790462")).toBe(true);
        expect(check("K188000873")).toBe(true);
        expect(check("L105926509")).toBe(true);
        expect(check("M193275034")).toBe(true);
        expect(check("N140833272")).toBe(true);
        expect(check("P153330503")).toBe(true);
        expect(check("Q195078956")).toBe(true);
        expect(check("R185881335")).toBe(true);
        expect(check("S182317099")).toBe(true);
        expect(check("T173757568")).toBe(true);
        expect(check("U151440878")).toBe(true);
        expect(check("V150131184")).toBe(true);
        expect(check("X191999039")).toBe(true);
        expect(check("Y124111055")).toBe(true);
        expect(check("W107979296")).toBe(true);
        expect(check("Z190712568")).toBe(true);
        expect(check("O151687359")).toBe(true);
        expect(check("I189730444")).toBe(true);

        expect(check("A800000014")).toBe(true);
        expect(check("A900000016")).toBe(true);
    });

    it("should success (National mode)", () => {
        expect(check("A12345678", Mode.National)).toBe(false);
        expect(check("A123456788", Mode.National)).toBe(false);
        expect(check("a123456789", Mode.National)).toBe(false);

        expect(check("A123456789", Mode.National)).toBe(true);
        expect(check("A223456781", Mode.National)).toBe(true);
        expect(check("A172571595", Mode.National)).toBe(true);
        expect(check("B181009370", Mode.National)).toBe(true);
        expect(check("C169458754", Mode.National)).toBe(true);
        expect(check("D196831313", Mode.National)).toBe(true);
        expect(check("E178155482", Mode.National)).toBe(true);
        expect(check("F138163250", Mode.National)).toBe(true);
        expect(check("G184812936", Mode.National)).toBe(true);
        expect(check("H127931619", Mode.National)).toBe(true);
        expect(check("J165790462", Mode.National)).toBe(true);
        expect(check("K188000873", Mode.National)).toBe(true);
        expect(check("L105926509", Mode.National)).toBe(true);
        expect(check("M193275034", Mode.National)).toBe(true);
        expect(check("N140833272", Mode.National)).toBe(true);
        expect(check("P153330503", Mode.National)).toBe(true);
        expect(check("Q195078956", Mode.National)).toBe(true);
        expect(check("R185881335", Mode.National)).toBe(true);
        expect(check("S182317099", Mode.National)).toBe(true);
        expect(check("T173757568", Mode.National)).toBe(true);
        expect(check("U151440878", Mode.National)).toBe(true);
        expect(check("V150131184", Mode.National)).toBe(true);
        expect(check("X191999039", Mode.National)).toBe(true);
        expect(check("Y124111055", Mode.National)).toBe(true);
        expect(check("W107979296", Mode.National)).toBe(true);
        expect(check("Z190712568", Mode.National)).toBe(true);
        expect(check("O151687359", Mode.National)).toBe(true);
        expect(check("I189730444", Mode.National)).toBe(true);

        expect(check("A800000014", Mode.National)).toBe(false);
        expect(check("A900000016", Mode.National)).toBe(false);
    });

    it("should success (Resident mode)", () => {
        expect(check("A12345678", Mode.Resident)).toBe(false);
        expect(check("A123456788", Mode.Resident)).toBe(false);
        expect(check("a123456789", Mode.Resident)).toBe(false);

        expect(check("A123456789", Mode.Resident)).toBe(false);
        expect(check("A223456781", Mode.Resident)).toBe(false);
        expect(check("A172571595", Mode.Resident)).toBe(false);
        expect(check("B181009370", Mode.Resident)).toBe(false);
        expect(check("C169458754", Mode.Resident)).toBe(false);
        expect(check("D196831313", Mode.Resident)).toBe(false);
        expect(check("E178155482", Mode.Resident)).toBe(false);
        expect(check("F138163250", Mode.Resident)).toBe(false);
        expect(check("G184812936", Mode.Resident)).toBe(false);
        expect(check("H127931619", Mode.Resident)).toBe(false);
        expect(check("J165790462", Mode.Resident)).toBe(false);
        expect(check("K188000873", Mode.Resident)).toBe(false);
        expect(check("L105926509", Mode.Resident)).toBe(false);
        expect(check("M193275034", Mode.Resident)).toBe(false);
        expect(check("N140833272", Mode.Resident)).toBe(false);
        expect(check("P153330503", Mode.Resident)).toBe(false);
        expect(check("Q195078956", Mode.Resident)).toBe(false);
        expect(check("R185881335", Mode.Resident)).toBe(false);
        expect(check("S182317099", Mode.Resident)).toBe(false);
        expect(check("T173757568", Mode.Resident)).toBe(false);
        expect(check("U151440878", Mode.Resident)).toBe(false);
        expect(check("V150131184", Mode.Resident)).toBe(false);
        expect(check("X191999039", Mode.Resident)).toBe(false);
        expect(check("Y124111055", Mode.Resident)).toBe(false);
        expect(check("W107979296", Mode.Resident)).toBe(false);
        expect(check("Z190712568", Mode.Resident)).toBe(false);
        expect(check("O151687359", Mode.Resident)).toBe(false);
        expect(check("I189730444", Mode.Resident)).toBe(false);

        expect(check("A800000014", Mode.Resident)).toBe(true);
        expect(check("A900000016", Mode.Resident)).toBe(true);
    });
});

describe("generate (self-testing)", () => {
    const TESTS_COUNT = 10000;

    it("should success (Default mode)", () => {
        for (let i = 0;i < TESTS_COUNT;i++) {
            const id = generate();
            expect(check(id)).toBe(true);
        }
    });

    it("should success (National mode)", () => {
        for (let i = 0;i < TESTS_COUNT;i++) {
            const id = generate(Mode.National);
            expect(check(id, Mode.National)).toBe(true);
        }
    });

    it("should success (Resident mode)", () => {
        for (let i = 0;i < TESTS_COUNT;i++) {
            const id = generate(Mode.Resident);
            expect(check(id, Mode.Resident)).toBe(true);
        }
    });
});
