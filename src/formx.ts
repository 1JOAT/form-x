import { ValidationRules, ValidationResult } from "./types";

export function validateForm(
  values: Record<string, any>,
  rules: ValidationRules
): ValidationResult {
  const errors: Record<string, string> = {};

  for (const field in rules) {
    const value = values[field];
    const fieldRules = rules[field];

    for (const rule of fieldRules) {
      // Required validation
      if (rule === "required" && !value) {
        errors[field] = "This field is required";
        break;
      }

      // Skip other validations if value is empty and not required
      if (!value && !fieldRules.includes("required")) {
        continue;
      }

      // Email validation
      if (rule === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errors[field] = "Invalid email address";
        break;
      }

      // Numeric validation
      if (rule === "numeric" && !/^\d+$/.test(value)) {
        errors[field] = "Must be a number";
        break;
      }

      // URL validation
      if (rule === "url" && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(value)) {
        errors[field] = "Must be a valid URL";
        break;
      }

      // Min length validation
      if (rule.startsWith("min:")) {
        const minLength = parseInt(rule.split(":")[1]);
        if (String(value).length < minLength) {
          errors[field] = `Must be at least ${minLength} characters`;
          break;
        }
      }

      // Max length validation
      if (rule.startsWith("max:")) {
        const maxLength = parseInt(rule.split(":")[1]);
        if (String(value).length > maxLength) {
          errors[field] = `Must not exceed ${maxLength} characters`;
          break;
        }
      }

      // Uppercase letters validation
      if (rule.startsWith("min_uppercase:")) {
        const min = parseInt(rule.split(":")[1]);
        const count = (value.match(/[A-Z]/g) || []).length;
        if (count < min) {
          errors[field] = `Must contain at least ${min} uppercase letter${min > 1 ? 's' : ''}`;
          break;
        }
      }

      // Lowercase letters validation
      if (rule.startsWith("min_lowercase:")) {
        const min = parseInt(rule.split(":")[1]);
        const count = (value.match(/[a-z]/g) || []).length;
        if (count < min) {
          errors[field] = `Must contain at least ${min} lowercase letter${min > 1 ? 's' : ''}`;
          break;
        }
      }

      // Special characters validation
      if (rule.startsWith("min_special:")) {
        const min = parseInt(rule.split(":")[1]);
        const count = (value.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
        if (count < min) {
          errors[field] = `Must contain at least ${min} special character${min > 1 ? 's' : ''}`;
          break;
        }
      }

      // Numeric characters validation
      if (rule.startsWith("min_numeric:")) {
        const min = parseInt(rule.split(":")[1]);
        const count = (value.match(/[0-9]/g) || []).length;
        if (count < min) {
          errors[field] = `Must contain at least ${min} number${min > 1 ? 's' : ''}`;
          break;
        }
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }
  return { valid: true, values };
}
