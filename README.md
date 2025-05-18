# Frontend Dashboard

A responsive Smart Home Dashboard built with **React** and **Tailwind CSS**. It visually displays and manages home devices—both interior and exterior—using a clean, modern UI. Designed for seamless user interaction with real-time control elements.



## Features

- **Modular Components** — Header, Sidebar, Devices, and Controls
- **Dark Themed UI** — Tailwind-powered custom theme
- **Responsive Layout** — Optimized for desktop and mobile views
- **Device Management** — Grouped views for interior and exterior smart devices
- **Interactive UI Elements** — Icons, hover effects, and transitions


## Tech Stack

- **React.js** — UI Library
- **Tailwind CSS** — Utility-first CSS framework
- **React Icons** — Icon library


## How to Run

### 1. Clone the repo

```bash
git clone https://github.com/faizansafwan/assignment.git
cd assignment/frontend
```

### 2. Install dependencies

```bash 
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

### 4. Open in browser
Visit: http://localhost:5173 (or the default port shown in your terminal)


---
---

# Backend Node.js Authentication API

This is a simple and secure RESTful API built with Node.js, Express, and MongoDB that handles user registration, login, and authentication using JWT (JSON Web Tokens). It includes password hashing with bcrypt and validation via express-validator.


## Features

- **User registration with hashed passwords** 
- **User login with JWT authentication**
- **Secure protected route to get logged-in user details** 
- **Password hashing using bcryptjs**
- **MongoDB connection with mongoose**
- **Environment variable support with dotenv**

## Tech Stack

- **Express** 
- **MongoDB & Mongoose**
- **JWT** 
- **bcryptjs**
- **dotenv**
- **express-validator**


## How to Run

### 1. Clone the repo

```bash
git clone https://github.com/faizansafwan/assignment.git
cd assignment/backend
```

### 2. Install dependencies

```bash 
npm install
```

### 3. Configuration 

Create a .env file in the root of the project and add:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the development server

```bash
node src/server.js
```


## API Endpoints

```bash
Post /api/user/register # Register a new user
Post /api/user/login # Authenticate user
get /api/user/me # Get logged-in user info
```