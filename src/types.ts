export type SimpleRule = 
  | "required" 
  | "email" 
  | "numeric" 
  | "url";

export type ParameterizedRule = 
  | `min:${number}` 
  | `max:${number}`
  | `min_uppercase:${number}`
  | `min_lowercase:${number}`
  | `min_special:${number}`
  | `min_numeric:${number}`;

export type ValidationRule = SimpleRule | ParameterizedRule;

export type ValidationRules = {
  [field: string]: ValidationRule[];
};

export type ValidationResult =
  | { valid: true; values: Record<string, any> }
  | { valid: false; errors: Record<string, string> };
