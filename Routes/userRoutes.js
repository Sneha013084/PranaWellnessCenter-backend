
const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUserProfile} = require ("../controllers/userController");
const protect = require("../middleware/authMiddleware");

// public routes

router.post( "/register", registerUser);
router.post("/login", loginUser);

//private route

router.get("/profile",getUserProfile);

module.exports = router;
