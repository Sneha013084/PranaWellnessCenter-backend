
## Overview

This is the backend application for Wellness center booking website, built using Node.js, Express, and MongoDB. It provides API endpoints to handle user authentication, profile management, and booking services.

## Features

User registration and login with JWT authentication

Secure password hashing using bcrypt

User profile management (view, update)

CRUD operations for bookings

Error handling and validation

CORS enabled for frontend-backend communication

Technologies Used

Backend Framework: Node.js, Express.js

Database: MongoDB with Mongoose ODM

Authentication: JWT

Security: bcrypt, dotenv for environment variables

Testing: Postman

## Installation

Clone the repository:

git clone https://github.com/Sneha013084/PranaWellnessCenter-backend


## Navigate to the backend folder:

cd backend


## Install dependencies:

npm install


## Create a .env file in the root with the following variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


## Start the server:

npm run dev   # if using nodemon
# or
npm start     # for production


## The server should now be running at http://localhost:5000.

## API Endpoints

## User Routes

POST /api/users/register – Register a new user

POST /api/users/login – Login a user

GET /api/users/profile – Get user profile (requires JWT)

PUT /api/users/profile – Update user profile (requires JWT)

## Booking Routes

POST /api/bookings – Create a new booking (requires JWT)

GET /api/bookings – Get all bookings of the logged-in user (requires JWT)

PUT /api/bookings/:id – Update a booking (requires JWT)

DELETE /api/bookings/:id – Delete a booking (requires JWT)

## Folder Structure

backend/
├─ config/               # Database connection
├─ controllers/          # Request handlers
├─ middleware/           # Auth middleware and error handlers
├─ models/               # Mongoose models (User, Booking)
├─ routes/               # API route definitions
├─ utils/                # Helper functions (e.g., JWT generation)
├─ server.js / app.js    # Main server file
├─ package.json
└─ README.md

## Connecting Frontend

Ensure frontend REACT_APP_API_URL points to the backend URL.

REACT_APP_API_URL=http://localhost:5000/api

## Deployment

Make sure the .env file is configured for production.

Use platforms like Render, Heroku, or AWS to deploy your backend.

Ensure CORS is enabled to allow requests from frontend domain.
