make this readme better man .. 
add the unnesesary stuffs

# Form-x

A lightweight TypeScript form validation library for hassle-free form validation in frontend applications. Form-x provides a simple, rule-based approach with zero dependencies.

[![npm version](https://badge.fury.io/js/form-x.svg)](https://badge.fury.io/js/form-x)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Why Form-x?

- 🎯 **Simple & Intuitive** - Write validation rules in a declarative way
- 🚀 **Framework Agnostic** - Works with React, Vue, Svelte, or vanilla JS/TS
- 📦 **Lightweight** - Zero dependencies, minimal bundle size
- 💪 **TypeScript First** - Full type safety and autocompletion
- ⚡ **Performant** - Optimized for quick validation checks

## Installation

```bash
npm install form-x
# or
yarn add form-x
# or
pnpm add form-x
```

## Quick Start

```typescript
import { validateForm } from "form-x";

// Define your form data
const formData = {
  username: "johndoe",
  email: "john@example.com",
  age: "25"
};

// Define validation rules
const rules = {
  username: ["required", { minLength: 3 }],
  email: ["required", "email"],
  age: ["required", "number", { min: 18 }]
};

// Validate!
const result = validateForm(formData, rules);

if (result.valid) {
  console.log("✅ Validation passed:", result.values);
} else {
  console.log("❌ Validation failed:", result.errors);
}
```

## Built-in Validation Rules

| Rule | Description | Example |
|------|-------------|---------|
| `required` | Field must not be empty | `["required"]` |
| `email` | Must be a valid email format | `["email"]` |
| `number` | Must be a number | `["number"]` |
| `minLength` | String must be at least n characters | `[{ minLength: 6 }]` |
| `min` | Number must be >= n | `[{ min: 18 }]` |
| `url` | Must be a valid URL | `["url"]` |

### Complex Validation Example

```typescript
const rules = {
  username: ["required", { minLength: 3 }],
  password: ["required", { minLength: 8 }],
  email: ["required", "email"],
  age: ["required", "number", { min: 18 }],
  website: ["url"] // optional URL field
};
```

## Error Handling

The validation result includes detailed error messages:

```typescript
// If validation fails
{
  valid: false,
  errors: {
    username: ["Username must be at least 3 characters long"],
    email: ["Invalid email format"],
    age: ["Age must be at least 18"]
  }
}
```

## TypeScript Support

Form-x is written in TypeScript and provides full type definitions:

```typescript
import { ValidationRules, ValidationResult } from "form-x";

interface UserForm {
  username: string;
  email: string;
  age: number;
}

const rules: ValidationRules<UserForm> = {
  username: ["required"],
  email: ["required", "email"],
  age: ["required", "number"]
};
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/1JOAT/form-x.git
cd form-x

# Install dependencies
npm install
```

### Available Scripts

```bash
# Run tests
npm test

# Build the package
npm run build

# Try the playground
npx tsx playground.ts
```

### Playground Example

Create `playground.ts` to try out the library:

```typescript
import { validateForm } from "./src";
import { ValidationRules } from "./src/types";

const data = { name: "", email: "invalid" };
const rules: ValidationRules = {
  name: ["required"],
  email: ["required", "email"],
};

console.log(validateForm(data, rules));
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

- Star this repo on GitHub ⭐
- Report issues on [GitHub Issues](https://github.com/1JOAT/form-x/issues)
- For discussions, use [GitHub Discussions](https://github.com/1JOAT/form-x/discussions)
