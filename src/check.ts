import { LOCATION_CODES } from "./location.ts";

/**
 * The type of an ID number.
 *
 * - `"national"`: 國民身分證統一編號
 * - `"resident"`: 新式外來人口統一證號
 * - `"old-resident"`: 舊式外來人口統一證號
 */
export type IDType = "national" | "resident" | "old-resident";

export type Sex = "male" | "female";

/** The information of a valid ID number. */
export interface IDInfo {
    type: IDType;
    sex: Sex;
    /** The location letter, which is the first letter of the ID number. */
    location: string;
}

const ID_TYPES: ReadonlySet<IDType> = new Set(["national", "resident", "old-resident"]);

const DEFAULT_TYPES: readonly IDType[] = ["national", "resident"];

const PATTERNS: readonly (readonly [IDType, RegExp])[] = [
    ["national", /^[A-Z][12]\d{8}$/u],
    // L, R, S and Y are not used in resident ID numbers.
    ["resident", /^[A-KM-QT-XZ][89]\d{8}$/u],
    ["old-resident", /^[A-Z][A-D]\d{8}$/u],
];

// The sex is decided by the second character.
const SEXES: Readonly<Record<string, Sex>> = {
    1: "male",
    2: "female",
    8: "male",
    9: "female",
    A: "male",
    B: "female",
    C: "male",
    D: "female",
};

const getDigit = (text: string, index: number): number => text.charCodeAt(index) - 48;

/**
 * Calculates the check digit from the first 9 characters of an ID number.
 *
 * The format of the text must be checked before calling this function.
 */
export const calculateCheckDigit = (text: string): number => {
    const locationCode = LOCATION_CODES[text[0]];

    // Old resident ID numbers use a letter here, and only the units digit of its code is used.
    const secondValue = Object.hasOwn(LOCATION_CODES, text[1])
        ? LOCATION_CODES[text[1]] % 10
        : getDigit(text, 1);

    let sum = Math.floor(locationCode / 10) + (locationCode % 10) * 9 + secondValue * 8;

    for (let i = 2; i < 9; i++) {
        sum += getDigit(text, i) * (9 - i);
    }

    return (10 - (sum % 10)) % 10;
};

/**
 * Parses an ID number.
 *
 * @returns The information of the ID number, or `null` if it is not a valid ID number.
 */
export const parse = (text: string): IDInfo | null => {
    // JavaScript callers can pass any type.
    if (typeof text !== "string") {
        return null;
    }

    const matched = PATTERNS.find(([, pattern]) => pattern.test(text));

    if (typeof matched === "undefined" || calculateCheckDigit(text) !== getDigit(text, 9)) {
        return null;
    }

    return {
        type: matched[0],
        sex: SEXES[text[1]],
        location: text[0],
    };
};

/**
 * Checks whether the text is a valid ID number of the given types.
 *
 * @param types The allowed types. By default, national and resident ID numbers are allowed, but old
 *   resident ID numbers are not.
 * @throws {TypeError} If a type is unknown.
 */
export const check = (text: string, types: IDType | readonly IDType[] = DEFAULT_TYPES): boolean => {
    const typeList = typeof types === "string" ? [types] : types;

    for (const type of typeList) {
        if (!ID_TYPES.has(type)) {
            throw new TypeError(`Unknown ID type: ${type}`);
        }
    }

    const info = parse(text);

    return info !== null && typeList.includes(info.type);
};
