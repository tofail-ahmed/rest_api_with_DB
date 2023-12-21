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
//updating a user credentials---------
//      try {
//       const id=req.params.id;
//       const user=await User.findOne({_id:id});
//       user.name=req.body.name;
//       user.age=req.body.age;
//       await user.save();
//       res.status(201).json(user);
//      } catch (error) {
//       res.status(500).send(error.message)
//      }
const updateUserController=async(req,res)=>{

      try {
            const id = req.params.id;
            const name = req.body.name;
            const age = Number(req.body.age);
        
            const updateFields = {};
        
            if (name) {
              updateFields.name = name;
            }
        
            if (!isNaN(age)) {
              updateFields.age = age;
            }
        
            const user = await User.findOneAndUpdate(
              { _id: id },
              { $set: updateFields },
              { new: true } // To return the updated document
            );
        
            if (user) {
              res.send(user);
            } else {
              res.status(404).send("User not found");
            }
          } catch (error) {
            res.status(500).send(error.message);
          }
}



//deleting a user--------------------------
const deleteSingleUserController = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });

    res.status(200).send({
      message: "User is deleted",
    });
  } catch (error) {
    res.status(404).send({
      message: error.message || "User not found",
    });
  }
};

module.exports = {
  getAllUserController,
  getSingleUserController,
  createUserController,
  updateUserController,
  deleteSingleUserController,
};
