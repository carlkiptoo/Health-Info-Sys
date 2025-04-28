# Health Information System API

A backend API for managing clients and health programs/services.  
Built with **Node.js**, **Express**, and **MongoDB**.

---

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Demo](#demo)
- [Author](#author)

---

## About

This project simulates a basic health information system that allows doctors to:
- Create health programs (e.g., TB, Malaria, HIV).
- Register new clients.
- Enroll clients into one or more programs.
- Search for clients by name or email.
- View client profiles with enrolled programs.
- Expose client profile information via API for external systems.

---

## Features
- RESTful API design
- MongoDB database integration
- Mongoose ODM for schema management
- Clean and modular code architecture
- Error handling middleware
- Client search functionality (case-insensitive)
- Enrolled programs population in client profiles

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose ODM)
- **Other:** dotenv, Nodemon

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/carlkiptoo/Health-Info-Sys.git
   cd Health-Info-Sys
2. Install dependencies
   ```bash
   npm install
3. Create .env file
   In the root directory create a env file:
   ```bash
     MONGO_URI=mongodb://127.0.0.1:27017/healthinfosystem
     PORT=5000
     API_KEY=xxxxx
4. Start development Server
   ```bash
      npm run dev
## API Endpoints
Method | Endpoint | Description␣␣
POST | /api/program | Create a new health program␣␣
POST | /api/client | Register a new client␣␣
POST | /api/enrollment | Enroll a client into programs␣␣
GET | /api/client/search?clientName=xxx | Search for clients by name␣␣
GET | /api/client/search?email=xxx | Search for clients by email␣␣
GET | /api/client/:id | View a client's profile including enrolled programs␣␣

## Demo
[This is a link to the demo](https://www.loom.com/share/5d667a3c532649e8bc6e2e27e1c97d7c?sid=4bb4eabd-7c79-4d58-85f6-2230596fed11)

## Author
Kirui Kiptoo Carlos
