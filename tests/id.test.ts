import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { Mode, check, generate } from "../src/index.ts";

describe("check", () => {
    it("should success (Default mode)", () => {
        assert.equal(check("A12345678"), false);
        assert.equal(check("A123456788"), false);
        assert.equal(check("a123456789"), false);

        assert.equal(check("A123456789"), true);
        assert.equal(check("A223456781"), true);
        assert.equal(check("A172571595"), true);
        assert.equal(check("B181009370"), true);
        assert.equal(check("C169458754"), true);
        assert.equal(check("D196831313"), true);
        assert.equal(check("E178155482"), true);
        assert.equal(check("F138163250"), true);
        assert.equal(check("G184812936"), true);
        assert.equal(check("H127931619"), true);
        assert.equal(check("J165790462"), true);
        assert.equal(check("K188000873"), true);
        assert.equal(check("L105926509"), true);
        assert.equal(check("M193275034"), true);
        assert.equal(check("N140833272"), true);
        assert.equal(check("P153330503"), true);
        assert.equal(check("Q195078956"), true);
        assert.equal(check("R185881335"), true);
        assert.equal(check("S182317099"), true);
        assert.equal(check("T173757568"), true);
        assert.equal(check("U151440878"), true);
        assert.equal(check("V150131184"), true);
        assert.equal(check("X191999039"), true);
        assert.equal(check("Y124111055"), true);
        assert.equal(check("W107979296"), true);
        assert.equal(check("Z190712568"), true);
        assert.equal(check("O151687359"), true);
        assert.equal(check("I189730444"), true);

        assert.equal(check("A800000014"), true);
        assert.equal(check("A900000016"), true);
    });

    it("should success (National mode)", () => {
        assert.equal(check("A12345678", Mode.National), false);
        assert.equal(check("A123456788", Mode.National), false);
        assert.equal(check("a123456789", Mode.National), false);

        assert.equal(check("A123456789", Mode.National), true);
        assert.equal(check("A223456781", Mode.National), true);
        assert.equal(check("A172571595", Mode.National), true);
        assert.equal(check("B181009370", Mode.National), true);
        assert.equal(check("C169458754", Mode.National), true);
        assert.equal(check("D196831313", Mode.National), true);
        assert.equal(check("E178155482", Mode.National), true);
        assert.equal(check("F138163250", Mode.National), true);
        assert.equal(check("G184812936", Mode.National), true);
        assert.equal(check("H127931619", Mode.National), true);
        assert.equal(check("J165790462", Mode.National), true);
        assert.equal(check("K188000873", Mode.National), true);
        assert.equal(check("L105926509", Mode.National), true);
        assert.equal(check("M193275034", Mode.National), true);
        assert.equal(check("N140833272", Mode.National), true);
        assert.equal(check("P153330503", Mode.National), true);
        assert.equal(check("Q195078956", Mode.National), true);
        assert.equal(check("R185881335", Mode.National), true);
        assert.equal(check("S182317099", Mode.National), true);
        assert.equal(check("T173757568", Mode.National), true);
        assert.equal(check("U151440878", Mode.National), true);
        assert.equal(check("V150131184", Mode.National), true);
        assert.equal(check("X191999039", Mode.National), true);
        assert.equal(check("Y124111055", Mode.National), true);
        assert.equal(check("W107979296", Mode.National), true);
        assert.equal(check("Z190712568", Mode.National), true);
        assert.equal(check("O151687359", Mode.National), true);
        assert.equal(check("I189730444", Mode.National), true);

        assert.equal(check("A800000014", Mode.National), false);
        assert.equal(check("A900000016", Mode.National), false);
    });

    it("should success (Resident mode)", () => {
        assert.equal(check("A12345678", Mode.Resident), false);
        assert.equal(check("A123456788", Mode.Resident), false);
        assert.equal(check("a123456789", Mode.Resident), false);

        assert.equal(check("A123456789", Mode.Resident), false);
        assert.equal(check("A223456781", Mode.Resident), false);
        assert.equal(check("A172571595", Mode.Resident), false);
        assert.equal(check("B181009370", Mode.Resident), false);
        assert.equal(check("C169458754", Mode.Resident), false);
        assert.equal(check("D196831313", Mode.Resident), false);
        assert.equal(check("E178155482", Mode.Resident), false);
        assert.equal(check("F138163250", Mode.Resident), false);
        assert.equal(check("G184812936", Mode.Resident), false);
        assert.equal(check("H127931619", Mode.Resident), false);
        assert.equal(check("J165790462", Mode.Resident), false);
        assert.equal(check("K188000873", Mode.Resident), false);
        assert.equal(check("L105926509", Mode.Resident), false);
        assert.equal(check("M193275034", Mode.Resident), false);
        assert.equal(check("N140833272", Mode.Resident), false);
        assert.equal(check("P153330503", Mode.Resident), false);
        assert.equal(check("Q195078956", Mode.Resident), false);
        assert.equal(check("R185881335", Mode.Resident), false);
        assert.equal(check("S182317099", Mode.Resident), false);
        assert.equal(check("T173757568", Mode.Resident), false);
        assert.equal(check("U151440878", Mode.Resident), false);
        assert.equal(check("V150131184", Mode.Resident), false);
        assert.equal(check("X191999039", Mode.Resident), false);
        assert.equal(check("Y124111055", Mode.Resident), false);
        assert.equal(check("W107979296", Mode.Resident), false);
        assert.equal(check("Z190712568", Mode.Resident), false);
        assert.equal(check("O151687359", Mode.Resident), false);
        assert.equal(check("I189730444", Mode.Resident), false);

        assert.equal(check("A800000014", Mode.Resident), true);
        assert.equal(check("A900000016", Mode.Resident), true);
    });
});

describe("generate (self-testing)", () => {
    const TESTS_COUNT = 10000;

    it("should success (Default mode)", () => {
        for (let i = 0; i < TESTS_COUNT; i++) {
            const id = generate();
            assert.equal(check(id), true);
        }
    });

    it("should success (National mode)", () => {
        for (let i = 0; i < TESTS_COUNT; i++) {
            const id = generate(Mode.National);
            assert.equal(check(id, Mode.National), true);
        }
    });

    it("should success (Resident mode)", () => {
        for (let i = 0; i < TESTS_COUNT; i++) {
            const id = generate(Mode.Resident);
            assert.equal(check(id, Mode.Resident), true);
        }
    });
});
