# ToDo app with Docker

A simple Todo app with a React frontend, Node.js backend, and PostgreSQL database.

Features:
   React for the frontend
   Node.js for the backend API
   PostgreSQL for the database
   Docker for containerization

Prerequisites:
   Before running the application, make sure you have the following installed:
   Docker
   Docker Compose

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/halyna-k/todo.git
   cd todo
   ```

2. **Set up environment variables:**
   - Copy the example environment file to .env:
   ```bash
   cp .env.example .env
   ```
   - Edit the .env file with your specific configuration (e.g., database credentials).


3. **Run the application:**
   ```bash
   docker compose --env-file .env up --build
   ```

3. **Access the app:**
   - Frontend: [http://localhost:3000]
   - Backend: [http://localhost:8000]

4. **Stop the application:**
   ```bash
   docker compose down
   ```
Folder Structure:
   client/ - React frontend source code.
   server/ - Node.js backend source code.
   .env.example - Sample environment configuration file.
   docker-compose.yml - Docker Compose configuration file.

Make sure `.env` files are properly set up before running. 🚀
