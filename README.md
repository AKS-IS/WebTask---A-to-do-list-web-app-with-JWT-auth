<h1 align="center">📝 WebTask: A Stack Note Taking App with JWT authentication ✨</h1>


# 📝 WebTask

A full-stack note-taking app built with the MERN stack (MongoDB, Express, React, Node.js). Features user authentication, CRUD for notes, rate limiting with Upstash Redis, and a responsive UI created by Arpit Kumar Sharma

---

## 🚀 Features

- User registration & login (JWT-based authentication)
- Create, read, update, and delete notes
- Notes are private to each user
- Rate limiting using Upstash Redis
- Responsive UI with Tailwind CSS & DaisyUI
- RESTful API backend
- Production-ready build scripts

---

## 🧪 Environment Setup

### Backend (`/backend`)

Create a `.env` file in the `backend` folder with the following:

```
PORT=5000 
MONGO_URI=<your_mongo_uri> 
UPSTASH_REDIS_REST_URL=<your_redis_rest_url> 
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token> 
JWT_SECRET=<your_jwt_secret>
NODE_ENV=development 
```

## 🔧 Run the Backend

```
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```
cd frontend
npm install
npm run dev
```
