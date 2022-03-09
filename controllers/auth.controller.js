//CRUD
const user = require('../models/User.model');

//create
exports.createOne = async (req, res) => {
  const doc = new user({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  const savedUser = await doc.save();
  if (!savedUser) {
    res.status(404).json({ message: 'no user Created' });
  } else {
    res.status(200).json({ data: savedUser });
  }
};
//getoneuser
exports.getOne = async (req, res) => {
  //get only one user
};
//read
exports.getAll = async (req, res) => {
  const doc = await user.find({ ...req.params.body });
  if (!doc) {
    return res.status(404).json({ message: 'no user' });
  }
  res.status(200).json({ data: doc });
};

//update
exports.updateOne = async (req, res) => {
  const doc = await user.findOneAndUpdate({ ...req.params._id }, req.body, {
    new: true,
  });

  if (!doc) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ data: doc });
};

//remove
exports.removeOne = async (req, res) => {
  const doc = await user.findOneAndRemove({ ...req.params._id }).exec();
  if (!doc) {
    return res.status(400).json({ message: 'no user' });
  }
  res.status(200).json({ message: 'user removed' });
};
