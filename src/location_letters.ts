/**
const LOCATION_LETTERS = {
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

for (const [l, v] of Object.entries(LOCATION_LETTERS)) {
    // eslint-disable-next-line no-extra-parens
    console.log(`${l}: ${Math.floor(v / 10) + (v % 10 * 9)},`);
}
*/

export const LOCATION_VALUES: Readonly<Record<string, number>> = {
    A: 1,
    B: 10,
    C: 19,
    D: 28,
    E: 37,
    F: 46,
    G: 55,
    H: 64,
    I: 39,
    J: 73,
    K: 82,
    L: 2,
    M: 11,
    N: 20,
    O: 48,
    P: 29,
    Q: 38,
    R: 47,
    S: 56,
    T: 65,
    U: 74,
    V: 83,
    W: 21,
    X: 3,
    Y: 12,
    Z: 30,
};
