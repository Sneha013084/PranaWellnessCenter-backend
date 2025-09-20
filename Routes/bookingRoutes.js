
const express = require("express");
const router = express.Router();

const {
    createBooking,
    getMyBookings,
    updateBooking,
    deleteBooking
} = require("../Controllers/BookingController");

const protect = require("../middleware/authMiddleware");

// all booking require login

router.post("/", protect, createBooking);
router.get("/my", protect, getMyBookings);
router.put("/:id", protect , updateBooking);
router.delete ("/:id", protect, deleteBooking);

module.exports = router;