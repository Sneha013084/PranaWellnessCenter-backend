
const express = require("express");
const router = express.Router();
const createContact = require("../Controllers/contactFormController");
const protect = require ("../middleware/authMiddleware");

//public route

router.post("/", createContact);

module.exports = router;