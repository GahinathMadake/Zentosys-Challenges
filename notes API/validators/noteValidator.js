const { check } = require('express-validator');

exports.createNoteValidator = [
  check('title')
    .not()
    .isEmpty()
    .withMessage('Title is required')
    .isLength({ max: 100 })
    .withMessage('Title must be less than 100 characters'),
  check('content')
    .not()
    .isEmpty()
    .withMessage('Content is required'),
  check('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array')
];