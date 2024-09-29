import {test, expect} from "@jest/globals";
import {
    isNull,
    isNumber,
    isObject,
    isString,
    numberToString,
    stringToNumber
} from "@scripts/utils/types";

test("should return a boolean'", () => {
    const result = isString('text');
    expect(typeof result).toBe('boolean');
    expect(result).toBe(true);
});

test("should return a boolean'", () => {
    const result = isNumber(123);
    expect(typeof result).toBe('boolean');
    expect(result).toBe(true);
});

test("should return a boolean'", () => {
    const result = isNull(null);
    expect(typeof result).toBe('boolean');
    expect(result).toBe(true);
});

test("should return a boolean'", () => {
    const result = isObject({
        test: 'test'
    });
    expect(typeof result).toBe('boolean');
    expect(result).toBe(true);
});

test('should convert a string to a number', () => {
    const result = stringToNumber('123');
    expect(result).toBe(123);
});

test('should convert a number to a string', () => {
    const result = numberToString(123);
    expect(result).toBe('123');
});