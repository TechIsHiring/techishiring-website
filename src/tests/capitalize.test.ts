import { describe, expect, it } from "vitest";

import capitalize from "lib/utils/capitalize";

describe("lib/utils/capitalize", () => {
  it("should capitalizes the first letter of a string", () => {
    expect(capitalize("hello there")).toBe("Hello there");
  });

  it("should return an empty string if the string is empty", () => {
    expect(capitalize("")).toBe("");
  });

  it("should return the same string if the first letter is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("should return the same string if the first letter is a number", () => {
    expect(capitalize("1Hello")).toBe("1Hello");
  });

  it("should return the same string if the first letter is a symbol", () => {
    expect(capitalize("!Hello")).toBe("!Hello");
  });

  it("should return the same string if the first letter is a space", () => {
    expect(capitalize(" Hello")).toBe(" Hello");
  });

  it("should return the same string if the first letter is a special character", () => {
    expect(capitalize("$hello")).toBe("$hello");
  });
});
