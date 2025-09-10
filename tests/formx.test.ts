import { describe, it, expect } from "vitest";
import { validateForm } from "../src";

describe("Form-x Validation", () => {
  it("validates required", () => {
    const result = validateForm({ name: "" }, { name: ["required"] });
    expect(result.valid).toBe(false);
    if (!result.valid) {
      expect(result.errors.name).toBe("This field is required");
    }
  });

  it("passes valid email", () => {
    const result = validateForm(
      { email: "praiseoke215@gmail.com" },
      { email: ["required", "email"] }
    );
    expect(result.valid).toBe(true);
  });

  it("fails invalid email", () => {
    const result = validateForm({ email: "invalid" }, { email: ["email"] });
    expect(result.valid).toBe(false);
  });
});
