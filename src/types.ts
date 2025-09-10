export type ValidationRule = "required" | "email";

export type ValidationRules = {
  [field: string]: ValidationRule[];
};

export type ValidationResult =
  | { valid: true; values: Record<string, any> }
  | { valid: false; errors: Record<string, string> };
