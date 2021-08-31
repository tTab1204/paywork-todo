const express = require('express');
const router = express.Router();
const { Todo } = require('../models/Todo');

router.post('/create-todo', (req, res) => {
  const todo = new Todo(req.body);

  todo.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

router.get('/show-todo', (req, res) => {
  Todo.find().exec((err, todos) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, todos });
  });
});

router.post('/delete-todo', (req, res) => {
  Todo.findOneAndDelete({ id: req.body.id }).exec((err, deletedId) => {
    if (err) return res.status(400).json({ success: false, err });
    res.status(200).json({ success: true, deletedId });
  });
});

module.exports = router;
