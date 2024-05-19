
# User Registration Validation Library

This Node.js library provides middleware for validating user registration data in an Express application. It ensures that user inputs like first name, last name, email, phone number, and password meet specified criteria.

## Features

- Validates that the first name and last name start with a capital letter.
- Checks if the email contains the `@` symbol.
- Ensures the phone number has a minimum length of 10 digits.
- Verifies that the password is at least 8 characters long and contains at least one uppercase letter, one digit, and one special character.

## Installation

Install the library using npm:

```bash
npm install user-registration-validation
```

## Usage

### Basic Setup

```javascript
const express = require('express');

const { validateUser } = require('user-registration-validation');
// Add the above line in your code

const app = express();

app.use(express.json());

app.post('/registration', validateUser, (req, res) => {
    res.status(200).json({
        status: true,
        message: 'User Registered Successfully.',
    });
});

app.use(errorHandlingMiddleware);

app.listen(8008, () => {
    console.log('Server is up and running at http://localhost:8008');
});
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss improvements or bugs.
