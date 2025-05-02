# Zentosys Challenges

This repository contains all the challenges I have completed as part of the internship application process at **Zentosys**.

## Included Projects

1. **To-Do App** – A simple task management application.  
2. **E-commerce Schema** – Database schema design for an e-commerce application.  
3. **Notes API (Express.js)** – RESTful API routes for a note-taking application using Express.

---
<br>
<br>

# To-Do App

A modern and minimalistic To-Do list application built with React and TailwindCSS. Tasks are saved in the browser's localStorage to ensure persistence across sessions.

🔗 **Live Demo:** [https://todo-list-shadcn.netlify.app/](https://todo-list-shadcn.netlify.app/)

### 🚀 Getting Started

To run the app locally, follow these steps:

```bash
# Install dependencies
npm i

# Start the development server
npm run dev


```


 <br>
 <br>
 
## 🛒 E-commerce App Schema
This project focuses on modeling a robust schema for a scalable eCommerce platform using MongoDB and Express.js, along with a basic API to retrieve products by vendor.

📌 Challenge Task
Design and implement schema with the following collections:

User (name, email, password hash, role, cart)

Product (name, price, stock, category, vendorId)

Order (userId, productIds, status, timestamps)

Cart (userId, products[] with quantity, total)

Bonus: Create an API to fetch all products of a specific vendor.

#🧾 Description
This backend-only project models core e-commerce functionality using Express and Mongoose. It supports basic CRUD and a bonus route to fetch vendor-specific products.




<br><br>
## 📝 Notes API

A secure REST API for managing user notes with **JWT authentication**. Users can register, log in, and perform **CRUD operations** on their personal notes.

---

## 🔗 Postman Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://gahinathmadake-6297423.postman.co/workspace/Note-API~86362fec-9d64-4c0f-8970-93451ab3ca97/collection/44620367-f4da73bf-c71a-4147-9c73-66a3df0af7af?action=share&creator=44620367)

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js and Express.js
- MongoDB (local or cloud)
- Postman (for testing APIs)

### 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/notes-api.git
cd notes-api

# Install dependencies
npm install
```
