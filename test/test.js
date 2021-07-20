const uppercase = require("./../uppercase")

test("uppercase hello retuns HELLO", () => {
    expect(uppercase("hello")).toBe("HELLO");
});
