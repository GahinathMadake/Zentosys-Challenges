# Zentosys Challenges

This repository contains all the challenges I have completed as part of the internship application process at **Zentosys**.

## Included Projects

1. **To-Do App** – A simple task management application.  
2. **E-commerce Schema** – Database schema design for an e-commerce application.  
3. **Notes API (Express.js)** – RESTful API routes for a note-taking application using Express.

---

## To-Do App

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

 
## E-commerce App Schema
This project focuses on modeling a robust schema for a scalable eCommerce platform using MongoDB and Express.js, along with a basic API to retrieve products by vendor.

📌 Challenge Task
Design and implement schema with the following collections:

User (name, email, password hash, role, cart)

Product (name, price, stock, category, vendorId)

Order (userId, productIds, status, timestamps)

Cart (userId, products[] with quantity, total)

Bonus: Create an API to fetch all products of a specific vendor.

🧾 Description
This backend-only project models core e-commerce functionality using Express and Mongoose. It supports basic CRUD and a bonus route to fetch vendor-specific products.
