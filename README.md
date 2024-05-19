# User Registration Middleware

This Node.js library provides middleware for validating user registration data in an Express application. It ensures that user inputs like first name, last name, email, phone number, and password meet specified criteria.

## Features

- Validates that the first name and last name start with a capital letter.
- Checks if the email contains the `@` symbol.
- Ensures the phone number has a minimum length of 10 digits.
- Verifies that the password is at least 8 characters long and contains at least one uppercase letter, one digit, and one special character.

## Special Features

### The Regular Expression `/^[A-Z]/`

- **Delimiters `/`:** Delimiters in regular expressions, they indicate the beginning and end of the expression.
- **Caret `^`:** When used inside square brackets, it signifies negation or the beginning of a string. However, when used outside square brackets at the start of a regular expression, it marks the beginning of the string.
- **Character Class `[A-Z]`:** Inside square brackets, it defines a character class, specifying any uppercase letter from 'A' to 'Z'. It matches any single character falling within this range.
- **Delimiter `/`:** Marks the end of the regular expression.

**How it Works:**

- **^:** Specifies that the match must occur at the beginning of the string.
- **[A-Z]:** Matches any uppercase letter.
- If the first character of the string matches an uppercase letter, the expression returns a match.

In simpler terms, `/^[A-Z]/` ensures that the very first character of a string is an uppercase letter. For instance:

- **"Hello":** The first character 'H' matches the condition, so it's considered a match.
- **"world":** The first character 'w' doesn't match the condition, so it's not considered a match.

This regular expression serves as a fundamental tool for enforcing certain formatting or validation rules, such as requiring capitalization at the beginning of a string.


## How to Use

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone <https://github.com/Shivambansal96/ErrorMiddleware-NodeJs>
```

### 2. Install Dependencies

Navigate into the cloned directory and install the dependencies using npm:

```bash
cd user-registration-middleware
npm init 
npm i express
```

### 3. Test with Postman
To test the user registration functionality, open your preferred API testing tool like Postman and send a POST request to http://localhost:8008/registration with the following JSON object in the request body:

```
{
    "firstName": "Shivam",
    "lastName": "Bansal",
    "email": "bansal.shivam1216@gmail.com",
    "phoneNumber": "7432854909",
    "password": "Qwerty@123"
}

```

Ensure that the request is sent with the Content-Type header set to application/json. You should receive a response indicating whether the user was registered successfully or if there were any validation errors.

<!-- ### 4. Import Middleware Functions

Import the middleware functions (`validateUser` and `errorHandlingMiddleware`) from the library in your Express application.

Example:

```javascript
const express = require('express');
const { validateUser, errorHandlingMiddleware } = require('user-registration-middleware');

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
``` -->

### 4. Run Your Application

Start your Express application and test the user registration functionality.


### 5. Customize Middleware

Customize the middleware functions as needed to fit your specific validation requirements.
```
Feel free to adjust the content as needed!
```
