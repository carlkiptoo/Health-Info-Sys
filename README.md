# Health-Info-Sys
Health Information System API
A backend API for managing clients and health programs/services.
Built with Node.js, Express, and MongoDB.

📚 Table of Contents
About

Features

Tech Stack

Setup Instructions

Environment Variables

API Endpoints

Project Structure

Demo

Author

📖 About
This project simulates a basic health information system that allows doctors to:

Create health programs (e.g., TB, Malaria, HIV).

Register new clients.

Enroll clients into one or more programs.

Search for clients by name or email.

View client profiles with enrolled programs.

Expose client profile information via API for external systems.

✨ Features
RESTful API design

MongoDB database integration

Mongoose ODM for schema management

Clean and modular code architecture

Error handling middleware

Client search functionality (case-insensitive)

Enrolled programs population in client profiles

🛠️ Tech Stack
Backend: Node.js, Express

Database: MongoDB (Mongoose ODM)

Other: dotenv, Nodemon

🚀 Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/health-info-system.git
cd health-info-system
Install dependencies

bash
Copy
Edit
npm install
Create .env file

In the root directory, add a .env file:

ini
Copy
Edit
MONGO_URI=mongodb://127.0.0.1:27017/healthinfosystem
PORT=5000
Start the development server

bash
Copy
Edit
npm run dev
⚙️ Environment Variables

Variable	Purpose
MONGO_URI	Your MongoDB connection string
PORT	Port where the server runs (default: 5000)
🔗 API Endpoints

Method	Endpoint	Description
POST	/api/programs	Create a new health program
POST	/api/clients	Register a new client
POST	/api/enrollments	Enroll a client into programs
GET	/api/clients/search?clientName=xxx	Search for clients by name
GET	/api/clients/search?email=xxx	Search for clients by email
GET	/api/clients/:id	View a client's profile including enrolled programs
✅ All APIs return JSON responses.

🗂️ Project Structure
bash
Copy
Edit
/controllers
  clientController.js
  programController.js
  enrollmentController.js
/models
  Client.js
  Program.js
/routes
  clientRoutes.js
  programRoutes.js
  enrollmentRoutes.js
/config
  db.js (optional)
app.js
.env
.gitignore
README.md
🎥 Demo
[Insert link to short Loom video / Postman screenshots here if available]

Example:

Creating a program

Registering a client

Enrolling client to programs

Searching for client

Viewing client profile

👨‍💻 Author
[Your Name]

GitHub: [Your GitHub profile link]