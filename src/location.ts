/** The official two-digit code of each location letter. */
const LOCATION_CODES: Readonly<Record<string, number>> = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 34,
    J: 18,
    K: 19,
    L: 20,
    M: 21,
    N: 22,
    O: 35,
    P: 23,
    Q: 24,
    R: 25,
    S: 26,
    T: 27,
    U: 28,
    V: 29,
    W: 32,
    X: 30,
    Y: 31,
    Z: 33,
};

/**
 * Gets the weighted value of a location letter.
 *
 * The tens digit of the code is weighted by 1 and the units digit is weighted by 9.
 */
export const getLocationValue = (letter: string): number => {
    const code = LOCATION_CODES[letter];

    return Math.floor(code / 10) + (code % 10) * 9;
};
