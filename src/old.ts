import { LOCATION_VALUES } from "./location_letters";
import { check } from "./id";

const calculateValue = (text: string): number => {
    // eslint-disable-next-line no-extra-parens
    let value = LOCATION_VALUES[text[0]] + ((text[1].charCodeAt(0) - "A".charCodeAt(0)) * 8);

    for (let i = 2;i < 9;i++) {
        value += (text.charCodeAt(i) - 48) * (9 - i);
    }

    return value;
};

/**
 * 檢查舊式外來人口統一證號。
 */
export const checkOldResidentID = (text: string): boolean => {
    if (!(/^[A-Z][A-D]\d{8}$/).test(text)) {
        return false;
    }

    const value = calculateValue(text) + text.charCodeAt(9) - 48;

    return value % 10 === 0;
};

/**
 * 檢查國民身分證統一編號或是新、舊式外來人口統一證號。
 */
export const checkIncludingOldResidentID = (text: string): boolean => {
    if (check(text)) {
        return true;
    }

    return checkOldResidentID(text);
};
