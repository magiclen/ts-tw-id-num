import assert from "node:assert/strict";
import { describe, it } from "node:test";

import type { Sex } from "../src/index.ts";
import { check, generate, parse } from "../src/index.ts";

const TESTS_COUNT = 10000;

describe("generate (self-testing)", () => {
    it("generates national or resident ID numbers by default", () => {
        for (let i = 0; i < TESTS_COUNT; i++) {
            const id = generate();

            assert.equal(check(id), true, id);
        }
    });

    it("generates ID numbers of the given type", () => {
        for (const type of ["national", "resident"] as const) {
            for (let i = 0; i < TESTS_COUNT; i++) {
                const id = generate({ type });

                assert.equal(check(id, type), true, id);
            }
        }
    });

    it("generates ID numbers of the given sex", () => {
        for (const sex of ["male", "female"] satisfies Sex[]) {
            for (let i = 0; i < TESTS_COUNT; i++) {
                const id = generate({ sex });

                assert.equal(parse(id)?.sex, sex, id);
            }
        }
    });

    it("generates ID numbers of the given location", () => {
        assert.equal(parse(generate({ location: "A" }))?.location, "A");
        assert.deepEqual(parse(generate({ type: "resident", sex: "female", location: "Z" })), {
            type: "resident",
            sex: "female",
            location: "Z",
        });

        // L is no longer used, so only national ID numbers can be generated.
        for (let i = 0; i < 100; i++) {
            const id = generate({ location: "L" });

            assert.equal(check(id, "national"), true, id);
        }
    });
});
