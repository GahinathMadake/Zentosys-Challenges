const Note = require('../models/Note');
const ErrorResponse = require('../utils/errorResponse');




const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.status(200).json({
      success: true,
      count: notes.length,
      data: notes
    });
  } catch (err) {
    next(err);
  }
};




const getNote = async (req, res, next) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, user: req.user.id });

    if (!note) {
      return next(
        new ErrorResponse(`Note not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: note
    });
  } catch (err) {
    next(err);
  }
};




const createNote = async (req, res, next) => {
  try {
    // Add user to req.body
    req.body.user = req.user.id;

    const note = await Note.create(req.body);

    res.status(201).json({
      success: true,
      data: note
    });
  } catch (err) {
    next(err);
  }
};




const updateNote = async (req, res, next) => {
  try {
    let note = await Note.findById(req.params.id);

    if (!note) {
      return next(
        new ErrorResponse(`Note not found with id of ${req.params.id}`, 404)
      );
    }

    // Make sure user owns the note
    if (note.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse(`Not authorized to update this note`, 401)
      );
    }

    note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: note
    });
  } catch (err) {
    next(err);
  }
};



const deleteNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return next(
        new ErrorResponse(`Note not found with id of ${req.params.id}`, 404)
      );
    }

    // Make sure user owns the note
    if (note.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse(`Not authorized to delete this note`, 401)
      );
    }

    await Note.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
};



module.exports = {getNotes, getNote, createNote, updateNote, deleteNote};