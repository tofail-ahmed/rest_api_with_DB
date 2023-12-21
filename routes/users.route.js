const express = require("express");
const {
  getAllUserController,
  getSingleUserController,
  createUserController,
  deleteSingleUserController,
} = require("../controllers/users.controller");
const router = express.Router();

router.get("/", getAllUserController);
router.get("/:id", getSingleUserController);
router.post("/", createUserController);
router.put("/", createUserController);
router.delete("/", deleteSingleUserController);
module.exports = router;
