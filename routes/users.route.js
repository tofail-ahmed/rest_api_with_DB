const express = require("express");
const {
  getAllUserController,
  getSingleUserController,
  createUserController,
  deleteSingleUserController,
  updateUserController,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getAllUserController);
router.get("/:id", getSingleUserController);
router.post("/", createUserController);
router.patch("/:id", updateUserController);
router.delete("/:id", deleteSingleUserController);
module.exports = router;
