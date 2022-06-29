const express = require ("express");
const { signUp ,loginFun, getUsers, getMyProfile} = require("./controller");
const router = express.Router();
const { authMiddleware, isNavya }=require("./../../util");

router.post("/sign-up", signUp);
router.post("/login",loginFun);
router.get("/users-list",authMiddleware,getUsers);
router.get("/my-profile",authMiddleware,isNavya,getMyProfile);

module.exports = router;