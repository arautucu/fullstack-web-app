# Frontend (React) Application

This is the frontend of a simple web application built with React. It allows users to log in and fetch a list of posts from the backend.

## Features
- User login with a basic authentication system.
- Fetch and display posts from the backend.
- Error handling and basic styling.

## Prerequisites
- Node.js (https://nodejs.org/)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arautucu/fullstack-web-app
   cd frontend

2. **Install dependencies**:
   ```bash
   npm install

3. **Run the application**:
   ```bash
   npm start

The React app will start on http://localhost:3000.

## Usage
- Login: Enter the correct username and password (as defined in the backend).
- Fetch Posts: Once logged in, click the "Fetch Posts" button to retrieve and display the list of posts from the backend.

## Additional Notes
- Ensure the backend server is running on http://localhost:5000 for the API calls to work correctly.

### **Backend README (Node.js + Express)**

```markdown
# Backend (Node.js + Express) API

This is the backend of a simple web application. It provides API endpoints for user authentication and fetching posts data from an external API.

## Features
- Simple user authentication.
- Fetches data from a mock API (https://jsonplaceholder.typicode.com/posts).
- Handles CORS for cross-origin requests.

## Prerequisites
- Node.js (https://nodejs.org/)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arautucu/fullstack-web-app
   cd backend

2. **Install dependencies**:
   ```bash
   npm install

3. **Run the application**:
   ```bash
   node server.js

The server will start on http://localhost:5000.

## API Endpoints
- GET /api/posts: Fetches a list of posts from the mock API.
- POST /api/login: Authenticates a user with a predefined username and password.

## Usage
- Login: Send a POST request to /api/login with username and password in the request body.
- Fetch Posts: Send a GET request to /api/posts to retrieve a list of posts.