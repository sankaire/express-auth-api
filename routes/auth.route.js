const express = require('express');
const router = express.Router();

const {
  createOne,
  getAll,
  updateOne,
  removeOne,
  getOne,
} = require('../controllers/auth.controller');

//api/v1/users
router.route('/').post(createOne).get(getAll);

//api/v1/users/:id
router.route('/:id').put(updateOne).delete(removeOne).get(getOne);

module.exports = router;
