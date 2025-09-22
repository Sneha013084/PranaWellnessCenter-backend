
const express = require ("express");
const mongoose = require("mongoose");
const connectDB = require ("./config/db");
const cors = require("cors");
const path = require("path");
require ("dotenv").config();

// create an instance for the express

const app = express();

connectDB(); // calling DB connection
//middleware

app.use(cors());  // this allows the connection between frontend and backend

app.use(express.json());  // middleware provided by express


app.use("/api/users", require ("./Routes/userRoutes"));
app.use("/api/bookings", require("./Routes/bookingRoutes")) ;
app.use("/api/contact", require("./Routes/contactRoutes"));




app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Serve Vite frontend build
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath, { index:false }));

// Handle all other routes → send index.html for frontend routing
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});
const PORT = process.env.PORT || 5000;
app.listen( PORT, () => console .log( `Server running on port ${PORT}`));