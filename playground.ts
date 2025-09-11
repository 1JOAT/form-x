import { validateForm } from "./src"
import { ValidationRules } from "./src/types"

// Example 1: User Registration
console.log('\n Testing User Registration Form:')
const registrationForm = {
  username: 'jo',  // too short
  email: 'not-an-email',
  password: 'weak123' // missing uppercase and special character
}

const registrationRules: ValidationRules = {
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

console.log('Form Data:', registrationForm)
console.log('Validation Result:', validateForm(registrationForm, registrationRules))

// Example 2: Login Form
console.log('\n Testing Login Form:')
const loginForm = {
  email: 'test@example.com',
  password: 'SecureP@ss123'
}

const loginRules: ValidationRules = {
  email: ['required', 'email'],
  password: ['required', 'min:8']
}

console.log('Form Data:', loginForm)
console.log('Validation Result:', validateForm(loginForm, loginRules))

// Example 3: Profile Form
console.log('\n Testing Profile Form:')
const profileForm = {
  displayName: 'J',  // too short
  website: 'not-a-url',
  bio: 'A'.repeat(501), // exceeds max length
  age: 'twenty' // not numeric
}

const profileRules: ValidationRules = {
  displayName: ['required', 'min:2'],
  website: ['url'],
  bio: ['max:500'],
  age: ['numeric']
}

console.log('Form Data:', profileForm)
console.log('Validation Result:', validateForm(profileForm, profileRules))

// Example 4: Empty Required Fields
console.log('\n Testing Required Fields:')
const emptyForm = {
  username: null,
  email: null,
  password: null
}

const requiredRules: ValidationRules = {
  username: ['required'],
  email: ['required'],
  password: ['required']
}

console.log('Form Data:', emptyForm)
console.log('Validation Result:', validateForm(emptyForm, requiredRules))

// Example 5: Valid Complex Form
console.log('\n Testing Valid Complex Form:')
const validForm = {
  username: 'johndoe',
  email: 'john@example.com',
  password: 'SecureP@ss123',
  website: 'https://example.com',
  bio: 'Full stack developer'
}

const complexRules: ValidationRules = {
  username: ['required', 'min:3', 'max:50'],
  email: ['required', 'email'],
  password: [
    'required',
    'min:8',
    'min_uppercase:1',
    'min_lowercase:1',
    'min_special:1',
    'min_numeric:1'
  ],
  website: ['url'],
  bio: ['max:500']
}

console.log('Form Data:', validForm)
console.log('Validation Result:', validateForm(validForm, complexRules))
