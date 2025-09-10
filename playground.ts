import { validateForm } from "./src";
import { ValidationRules } from "./src/types";

const value = {
  name: "email",
  email: "Emmanuel@gmail.com",
};

const rules: ValidationRules = {
  name: ["required"],
  email: ["required", "email"],
};

const result = validateForm(value, rules);
console.log(result);
