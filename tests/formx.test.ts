import { describe, it, expect } from "vitest";
import { validateForm } from "../src";

describe("Form-x Validation", () => {
  describe("Basic Validations", () => {
    it("validates required", () => {
      const result = validateForm({ name: "" }, { name: ["required"] });
      expect(result.valid).toBe(false);
      if (!result.valid) {
        expect(result.errors.name).toBe("This field is required");
      }
    });

    it("passes valid email", () => {
      const result = validateForm(
        { email: "test@example.com" },
        { email: ["required", "email"] }
      );
      expect(result.valid).toBe(true);
    });

    it("fails invalid email", () => {
      const result = validateForm({ email: "invalid" }, { email: ["email"] });
      expect(result.valid).toBe(false);
    });

    it("validates numeric", () => {
      const result = validateForm({ age: "abc" }, { age: ["numeric"] });
      expect(result.valid).toBe(false);
    });

    it("validates url", () => {
      const result = validateForm(
        { website: "https://example.com" },
        { website: ["url"] }
      );
      expect(result.valid).toBe(true);
    });
  });

  describe("Length Validations", () => {
    it("validates minimum length", () => {
      const result = validateForm(
        { username: "john" },
        { username: ["min:5"] }
      );
      expect(result.valid).toBe(false);
    });

    it("validates maximum length", () => {
      const result = validateForm(
        { username: "johndoe" },
        { username: ["max:5"] }
      );
      expect(result.valid).toBe(false);
    });
  });

  describe("Character Type Validations", () => {
    it("validates minimum uppercase letters", () => {
      const result = validateForm(
        { password: "abcdef" },
        { password: ["min_uppercase:1"] }
      );
      expect(result.valid).toBe(false);
    });

    it("validates minimum lowercase letters", () => {
      const result = validateForm(
        { password: "ABCDEF" },
        { password: ["min_lowercase:1"] }
      );
      expect(result.valid).toBe(false);
    });

    it("validates minimum special characters", () => {
      const result = validateForm(
        { password: "abcABC123" },
        { password: ["min_special:1"] }
      );
      expect(result.valid).toBe(false);
    });

    it("validates minimum numeric characters", () => {
      const result = validateForm(
        { password: "abcABC!" },
        { password: ["min_numeric:1"] }
      );
      expect(result.valid).toBe(false);
    });
  });

  describe("Complex Validations", () => {
    it("validates password with multiple rules", () => {
      const result = validateForm(
        { password: "Abc123!" },
        { 
          password: [
            "required",
            "min:6",
            "min_uppercase:1",
            "min_lowercase:1",
            "min_numeric:1",
            "min_special:1"
          ]
        }
      );
      expect(result.valid).toBe(true);
    });

    it("validates username with multiple rules", () => {
      const result = validateForm(
        { username: "johndoe" },
        { username: ["required", "min:5", "max:50"] }
      );
      expect(result.valid).toBe(true);
    });
  });
});
