const { check } = require('express-validator');

exports.registerValidator = [
  check('name')
    .not()
    .isEmpty()
    .withMessage('Name is required')
    .isLength({ max: 50 })
    .withMessage('Name must be less than 50 characters'),
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters')
];

exports.loginValidator = [
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  check('password')
    .not()
    .isEmpty()
    .withMessage('Password is required')
];