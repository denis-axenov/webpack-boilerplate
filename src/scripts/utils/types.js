export const isNumber = (param) => {
    return typeof param === "number";
};

export const isString = (param) => {
    return typeof param === "string";
};

export const isUndefined = (param) => {
    return typeof param === "undefined";
};

export const isBoolean = (param) => {
    return typeof param === "boolean";
};

export const isNull = (param) => {
    return param === null;
};

export const isArray = (param) => {
    return Array.isArray(param);
};

export const isFunction = (param) => {
    return typeof param === 'function';
};

export const isObject = (param) => {
    return typeof param === 'object' && !isNull(param) && !isArray(param);
};

export const numberToString = (param) => {

    if (!isNumber(param)) {
        throw new Error("Parameter must be a number");
    }

    return String(param);
};

export const stringToNumber = (param) => {

    if (!isString(param)) {
        throw new Error("Parameter must be a string");
    }

    return Number(param);
};