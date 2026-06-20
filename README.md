# Mini Project Management Portal

## Project Overview

Mini Project Management Portal is a full-stack web application developed using React.js, Node.js, Express.js, and MongoDB. The application allows users to manage project tasks efficiently.

Users can:

* View all tasks
* Create a new task
* Update task status
* Delete tasks
* Track task progress

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

---

## Project Structure

```text
mini-project-management-portal/

├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── App.js
│       └── index.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

## Installation and Setup

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Environment Variables

Create a `.env` file inside the backend folder and add:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
```

---

## API Endpoints

### Get All Tasks

```http
GET /tasks
```

### Create New Task

```http
POST /tasks
```

Sample Request:

```json
{
  "title": "Build Login Page",
  "description": "Create a responsive login page for users.",
  "status": "Pending"
}
```

### Update Task Status

```http
PUT /tasks/:id
```

Sample Request:

```json
{
  "status": "Completed"
}
```

### Delete Task

```http
DELETE /tasks/:id
```

---

## Features

* Responsive UI
* Create Task
* View Tasks
* Update Task Status
* Delete Task
* Loading Indicator
* Empty State Handling
* Form Validation
* REST API Integration
* MongoDB Database Integration

---

## Assumptions

* MongoDB Community Server is installed and running locally.
* Internet connection is available during package installation.
* Node.js and npm are installed on the system.

---

## Future Enhancements

* JWT Authentication
* Search Functionality
* Pagination
* Dashboard Statistics
* Dark Mode
* Unit Testing

---

## Author

**Pathuri Sujith Reddy**
