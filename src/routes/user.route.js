const express = require("express");
const { createUser, getAllUsers, getUserId, updateUser, deleteUser } = require("../controllers/userController");

const router = express.Router();

//Create User
router.post("/users", createUser);
// get all user
router.get("/users", getAllUsers);
// get a user
router.get("/users/:id", getUserId);
//update a user
router.put("/users/:id", updateUser);
//delete a user
router.delete("/users/:id", deleteUser);

module.exports = router