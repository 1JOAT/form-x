import { ValidationRules, ValidationResult } from "./types";

export function validateForm(
  values: Record<string, any>,
  rules: ValidationRules
): ValidationResult {
  const errors: Record<string, string> = {};

  for (const field in rules) {
    const value = values[field];
    for (const rule of rules[field]) {
      if (rule === "required" && !value) {
        errors[field] = "This field is required";
      }
      if (rule === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[field] = "Invalid email address";
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }
  return { valid: true, values };
}
