const express = require('express');
const router = express.Router();

const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote
} = require('../controllers/notes.controller');

const { protect } = require('../middleware/authentication');

// Set up routes
router.get('/', protect, getNotes);
router.post('/', protect, createNote);
router.get('/:id',protect,  getNote);
router.put('/:id', protect, updateNote);
router.delete('/:id',protect,  deleteNote);

module.exports = router;