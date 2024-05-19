
const express = require('express');
// const path = require('path');

const app = express();

app.use(express.json())
// app.use(express.static(path.join(__dirname, 'public')));

/***********************************************************************************************
 * Middleware to validate user input for registration.
 * 
 * @param {Object} req - The request object containing user input data.
 * @param {Object} res - The response object to send validation errors if any.
 * @param {Function} next - The next middleware function to be called if validation passes.
 **********************************************************************************************/

function validateUser(req, res, next) {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    const errors = [];
    if(!firstName || !/^[A-Z]/.test(firstName)) {
        errors.push('First Name should start with a Capital Letter')
    } 

    if(!lastName || !/^[A-Z]/.test(lastName)) {
        errors.push('Last Name should start with a Capital Letter')
    } 

    if(!email || !/@/.test(email)) {
        errors.push('Email should contain @ symbol.')
    }

    if(!phoneNumber || phoneNumber.length < 10) {
        errors.push('Phone number should have a minimum length of 10 digits.')
    }

    const passwordGen = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
    if(!password || !passwordGen.test(password) || password.length <= 8) {
        errors.push('Password is invalid!')
}


    if(errors.length > 0) {
        return res.status(404).json({
            status: false,
            errors: errors,
        })
    }

    next();

}

/*********************************************************************************************
 * Error handling middleware to catch and respond to errors.
 * 
 * @param {Object} err - The error object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object to send error details.
 * @param {Function} next - The next middleware function to be called.
*********************************************************************************************/


function errorHandlingMiddleware(err, req, res, next) {

    res.json({
        status: false, 
        message: err.message,
    })

    next(err);
}


                    // TRYING TO GET THE OUTPUT IN UI ( OUTPUT VISIBLE BUT NOT WORKING PROPERLY )

// app.get('/UI', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })
            
                    // TRYING TO GET THE OUTPUT IN UI 





/**********************************************************************************************
 * Route to handle user registration.
 * 
 * @param {Object} req - The request object containing user registration data.
 * @param {Object} res - The response object to send the registration status.
 *********************************************************************************************/

app.post('/registration', validateUser, (req, res) => {
    res.status(400).json({

        status: true,
        message: 'User Registered Successfully.'

    })
})

app.use(errorHandlingMiddleware)

app.listen(8008, () => {
    console.log('Server is up and running at https://localhost:8008/registration');
})