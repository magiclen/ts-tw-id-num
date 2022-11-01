import { LOCATION_VALUES } from "./location_letters";

/**
 * 檢查或是產生的模式。
 */
export const enum Mode {
    /**
     * 國民身分證統一編號 OR 新式外來人口統一證號
     */
    Default,
    /**
     * 國民身分證統一編號。
     */
    National,
    /**
     * 新式外來人口統一證號。
     */
    Resident
}

/**
 * 性別。
 *
 * 國民身分證統一編號：男性為1；女性為2。
 * 新式外來人口統一證號：男性為8；女性為9。
 */
export const enum Sex {
    /**
     * 男性。
     */
    Male,
    /**
     * 女性。
     */
    Female,
}

const calculateValue = (text: string): number => {
    let value = LOCATION_VALUES[text[0]];

    for (let i = 1;i < 9;i++) {
        value += (text.charCodeAt(i) - 48) * (9 - i);
    }

    return value;
};

/**
 * 檢查國民身分證統一編號或是新式外來人口統一證號。
 */
export const check = (text: string, mode: Mode = Mode.Default): boolean => {
    switch (mode) {
        case Mode.National:
            if (!(/^[A-Z][12]\d{8}$/).test(text)) {
                return false;
            }
            break;
        case Mode.Resident:
            if (!(/^[A-KM-QT-XZ][89]\d{8}$/).test(text)) {
                return false;
            }
            break;
        default:
            // Mode.Default
            if (!(/^(?:(?:[A-KM-QT-XZ][1289])|(?:[LRSY][12]))\d{8}$/).test(text)) {
                return false;
            }
            break;
    }

    const value = calculateValue(text) + text.charCodeAt(9) - 48;

    return value % 10 === 0;
};

/**
 * 產生國民身分證統一編號或是新式外來人口統一證號。
 */
export const generate = (mode: Mode = Mode.Default, sex?: Sex): string => {
    let location;
    let sexNumber;

    switch (mode) {
        case Mode.National:
            switch (sex) {
                case Sex.Male:
                    sexNumber = 1;
                    break;
                case Sex.Female:
                    sexNumber = 2;
                    break;
                default:
                    sexNumber = Math.floor(Math.random() * 2) + 1;
            }
            break;
        case Mode.Resident:
            switch (sex) {
                case Sex.Male:
                    sexNumber = 8;
                    break;
                case Sex.Female:
                    sexNumber = 9;
                    break;
                default:
                    sexNumber = Math.floor(Math.random() * 2) + 8;
            }
            break;
        default:
            // Mode.Default
            switch (sex) {
                case Sex.Male:
                    sexNumber = Math.floor(Math.random() * 2) + 1;

                    if (sexNumber === 2) {
                        sexNumber = 8;
                    }
                    break;
                case Sex.Female:
                    sexNumber = Math.floor(Math.random() * 2) + 1;

                    if (sexNumber === 1) {
                        sexNumber = 9;
                    }
                    break;
                default:
                    sexNumber = Math.floor(Math.random() * 4) + 1;

                    if (sexNumber >= 3) {
                        sexNumber += 5;
                    }
            }
            break;
    }

    if (sexNumber <= 2) {
        // National
        location = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } else {
        // Resident
        let rnd = Math.floor(Math.random() * 22);

        if (rnd >= 21) {
            rnd += 4;
        } else if (rnd >= 16) {
            rnd += 3;
        } else if (rnd >= 11) {
            rnd += 1;
        }

        location = String.fromCharCode(rnd + 65);
    }

    const seq = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");

    const prefix = `${location}${sexNumber}${seq}`;

    const value = calculateValue(prefix);
    // eslint-disable-next-line no-extra-parens
    const checkNumber = (10 - (value % 10)) % 10;

    return `${prefix}${checkNumber}`;
};
