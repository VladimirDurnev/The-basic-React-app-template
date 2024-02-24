import {validateValue} from "./validateValue";

describe("test", () => {
    test("validate value (50)", () => {
        expect(validateValue(50)).toBe(true);
    });
    test("validate value (100)", () => {
        expect(validateValue(100)).toBe(true);
    });
    test("validate value (0)", () => {
        expect(validateValue(0)).toBe(true);
    });
    test("validate value (-1)", () => {
        expect(validateValue(-1)).toBe(false);
    });
    test("validate value (101)", () => {
        expect(validateValue(101)).toBe(false);
    });
});
