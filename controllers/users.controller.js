const User = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

//get all user -------------
const getAllUserController = async (req, res) => {
  try {
    const allusers = await User.find();
    res.status(200).send(allusers);
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
};

//get single user by id--------------
const getSingleUserController = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });

    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
};

//creating new user credentials-------------
const createUserController = async (req, res) => {
  try {
    const newUser = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
};

//deleting a user--------------------------
const deleteSingleUserController = (req, res) => {
  res.status(200).json({
    message: "This is delete a user delete route",
  });
};

module.exports = {
  getAllUserController,
  getSingleUserController,
  createUserController,
  deleteSingleUserController,
};
