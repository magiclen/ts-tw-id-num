import type { Sex } from "./check.ts";
import { calculateCheckDigit } from "./check.ts";
import { ACTIVE_LOCATION_LETTERS, LOCATION_LETTERS } from "./location.ts";

/** Options for `generate`. A random value is used for each option which is not set. */
export interface GenerateOptions {
    /**
     * The type of the ID number. Old resident ID numbers are not supported because they are no
     * longer issued.
     */
    type?: "national" | "resident";
    sex?: Sex;
    /** The location letter from A to Z. L, R, S and Y can only be used for national ID numbers. */
    location?: string;
}

type GenerateType = NonNullable<GenerateOptions["type"]>;

const GENERATE_TYPES: readonly GenerateType[] = ["national", "resident"];

const SEXES: readonly Sex[] = ["male", "female"];

// The second digit of each type and sex.
const SEX_DIGITS: Readonly<Record<GenerateType, Readonly<Record<Sex, number>>>> = {
    national: { male: 1, female: 2 },
    resident: { male: 8, female: 9 },
};

const randomInt = (max: number): number => Math.floor(Math.random() * max);

const randomItem = <T>(items: ArrayLike<T>): T => items[randomInt(items.length)];

/**
 * Generates a random ID number.
 *
 * @throws {TypeError} If `type` or `sex` is unknown.
 * @throws {RangeError} If `location` is not a letter from A to Z, or it cannot be used with `type`.
 */
export const generate = (options: GenerateOptions = {}): string => {
    const { sex = randomItem(SEXES), location } = options;
    let { type } = options;

    if (typeof type !== "undefined" && !GENERATE_TYPES.includes(type)) {
        throw new TypeError(`Unknown type: ${type}`);
    }

    if (!SEXES.includes(sex)) {
        throw new TypeError(`Unknown sex: ${sex}`);
    }

    if (typeof location !== "undefined") {
        if (!/^[A-Z]$/u.test(location)) {
            throw new RangeError(
                `\`location\` must be a letter from A to Z, but it is ${location}.`,
            );
        }

        const isActive = ACTIVE_LOCATION_LETTERS.includes(location);

        if (type === "resident" && !isActive) {
            throw new RangeError(
                `\`location\` ${location} cannot be used for resident ID numbers.`,
            );
        }

        // Only national ID numbers can use the location letters which are no longer used.
        type ??= isActive ? randomItem(GENERATE_TYPES) : "national";
    }

    type ??= randomItem(GENERATE_TYPES);

    const letter =
        location ?? randomItem(type === "national" ? LOCATION_LETTERS : ACTIVE_LOCATION_LETTERS);
    const serial = randomInt(10_000_000).toString().padStart(7, "0");
    const prefix = `${letter}${SEX_DIGITS[type][sex]}${serial}`;

    return `${prefix}${calculateCheckDigit(prefix)}`;
};
