/** The official two-digit code of each location letter. */
export const LOCATION_CODES: Readonly<Record<string, number>> = {
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

/** All location letters. */
export const LOCATION_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/** The location letters which are still used for new ID numbers. L, R, S and Y are no longer used. */
export const ACTIVE_LOCATION_LETTERS = "ABCDEFGHIJKMNOPQTUVWXZ";
