import express from "express";
import userSchema from "../models/user.js";

const router = express.Router();

//Create User
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all user
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get a user
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//update a user
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password, date_created } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, email, password, date_created } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//delete a user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
export default router;
