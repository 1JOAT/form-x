# @joat/formx

Zero-config form validation for TypeScript that just works. Built for modern web applications.

## Features

- **Simple API** - Array-based validation rules
- **Type Safe** - Built with TypeScript for excellent type inference
- **Zero Config** - Works out of the box with any JS/TS project
- **No Dependencies** - Tiny footprint, no external dependencies
- **Framework Agnostic** - Use with React, Vue, Svelte, or vanilla JS

## Install

```bash
npm install @joat/formx
```

## Usage

```ts
import { validateForm } from '@joat/formx'

// Your form values
const form = {
  username: 'alex',
  email: 'not-an-email',
  password: 'weak'
}

// Define validation rules
const rules = {
  username: ['required', 'min:3', 'max:50'],
  email: ['required', 'email'],
  password: [
    'required',
    'min:8',
    'min_uppercase:1',
    'min_lowercase:1',
    'min_special:1',
    'min_numeric:1'
  ]
}

// Validate form
const result = validateForm(form, rules)

if (!result.valid) {
  console.log(result.errors)
  // {
  //   email: 'Invalid email address',
  //   password: 'Must contain at least 1 uppercase letter'
  // }
```

## Available Rules

| Rule | Description | Example | Error Message |
|------|-------------|---------|---------------|
| `required` | Field must not be empty | `['required']` | 'This field is required' |
| `email` | Must be a valid email | `['email']` | 'Invalid email address' |
| `url` | Must be a valid URL | `['url']` | 'Must be a valid URL' |
| `numeric` | Must contain only numbers | `['numeric']` | 'Must be a number' |
| `min:n` | Min length | `['min:5']` | 'Must be at least 5 characters' |
| `max:n` | Max length | `['max:50']` | 'Must not exceed 50 characters' |
| `min_uppercase:n` | Min uppercase letters | `['min_uppercase:1']` | 'Must contain at least 1 uppercase letter' |
| `min_lowercase:n` | Min lowercase letters | `['min_lowercase:1']` | 'Must contain at least 1 lowercase letter' |
| `min_special:n` | Min special chars | `['min_special:1']` | 'Must contain at least 1 special character' |
| `min_numeric:n` | Min numbers | `['min_numeric:1']` | 'Must contain at least 1 number' |

## Examples

### User Registration
```ts
const rules = {
  username: ['required', 'min:3', 'max:50'],
  email: ['required', 'email'],
  password: [
    'required',
    'min:8',
    'min_uppercase:1',
    'min_lowercase:1', 
    'min_special:1',
    'min_numeric:1'
  ]
}
```

### Profile Form
```ts
const rules = {
  displayName: ['required', 'min:2'],
  website: ['url'],
  bio: ['max:500']
}
```

### Login Form
```ts
const rules = {
  email: ['required', 'email'],
  password: ['required']
}
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

## Development

```bash
# Clone the repo
git clone https://github.com/1JOAT/form-x.git

# Install dependencies
npm install

# Run tests
npm test

# Build package
npm run build
```

## Contributing

Pull requests are welcome! Please make sure to:

1. Add tests for new features
2. Update documentation for API changes
3. Run tests before submitting

## License

MIT © [JOAT](https://github.com/1JOAT)
