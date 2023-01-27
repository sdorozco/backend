const userSchema = require("../models/user.js");

const createUser = (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const getAllUsers = (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
const getUserId = (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, password, date_created } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, email, password, date_created } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};
const deleteUser = (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

module.exports = {
  createUser,
  getAllUsers,
  getUserId,
  updateUser,
  deleteUser,
};
