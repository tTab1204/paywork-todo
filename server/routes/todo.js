const express = require('express');
const router = express.Router();
const { Todo } = require('../models/Todo');

router.post('/create-todo', (req, res) => {
  console.log(req);
  const todo = new Todo(req.body);

  todo.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({ success: true, doc });
  });
});

router.get('/todo', (req, res) => {
  Todo.find().exec((err, todos) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, todos });
  });
});

module.exports = router;
