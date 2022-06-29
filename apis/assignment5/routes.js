const express = require ("express");
const { createUser ,getUser, updateUser, deleteUser} = require("./controller");
const router = express.Router();

router.post("/create-user", createUser);
router.get("/get-user",getUser);
router.put("/update-user",updateUser);
router.delete("/delete-user",deleteUser);

module.exports = router;