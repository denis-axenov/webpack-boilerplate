import {test, expect} from "@jest/globals";
import Module from "@scripts/module";


test.each([
    'string',
    123,
    true,
    null,
    undefined,
    []
])("should throw an error if the parameter is not an object: %p", (param) => {
    expect(() => {
        new Module(param);
    }).toThrow("Parameter must be an object");
});

test("should throw an error if required parameters are not provided", () => {
    expect(() => {
        new Module({
            param1: 1
        });
    }).toThrow("Required parameters param1 and param2 must be provided");
});

test("should throw an error if required parameters are not numbers", () => {
    expect(() => {
        new Module({
            param1: "1",
            param2: 2
        });
    }).toThrow("Parameters param1 and param2 must be numbers");
});