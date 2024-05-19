<!-- 
# User Registration Middleware Library

This Node.js library provides middleware for validating user registration data in an Express application. It ensures that user inputs like first name, last name, email, phone number, and password meet specified criteria.

## Features

- Validates that the first name and last name start with a capital letter.
- Checks if the email contains the `@` symbol.
- Ensures the phone number has a minimum length of 10 digits.
- Verifies that the password is at least 8 characters long and contains at least one uppercase letter, one digit, and one special character.


## How TO USE:
 -->


# User Registration Middleware Library

This Node.js library provides middleware for validating user registration data in an Express application. It ensures that user inputs like first name, last name, email, phone number, and password meet specified criteria.

## Features

- Validates that the first name and last name start with a capital letter.
- Checks if the email contains the `@` symbol.
- Ensures the phone number has a minimum length of 10 digits.
- Verifies that the password is at least 8 characters long and contains at least one uppercase letter, one digit, and one special character.

## How to Use

To use this library in your Node.js Express application, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:

    ```bash
    git clone <repository-url>
    ```

    Replace `<repository-url>` with the URL of your repository.

2. **Install Dependencies**: Navigate into the cloned directory and install the dependencies using npm:

    ```bash
    cd user-registration-validation
    npm install
    ```

3. **Import Middleware Functions**: Import the middleware functions (`validateUser` and `errorHandlingMiddleware`) from the library in your Express application.

    Example:

    ```javascript
    const express = require('express');
    const { validateUser, errorHandlingMiddleware } = require('user-registration-validation');

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

4. **Run Your Application**: Start your Express application and test the user registration functionality.

5. **Customize Middleware**: Customize the middleware functions as needed to fit your specific validation requirements.






























<!-- 
## Installation

Install the library using npm:

```bash
npm i user-registration-middleware
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

 -->
