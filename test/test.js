const uppercase = require("./../uppercase")
const sum = require("./../sum")

test("uppercase hello retuns HELLO", () => {
    expect(uppercase("hello")).toBe("HELLO");
});

test("sum 1 + 5 returns 6", () => {
    expect(sum(1, 5)).toBe(6);
});
