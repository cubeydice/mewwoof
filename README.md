# 🐾 mewwoof

A web application to keep track of your current pets. The frontend is built using [Vite](https://vitejs.dev/), and the backend is powered by [Django](https://www.djangoproject.com/).

## ✨ Features

- **Add Pets**: Create entries for your pets.
- **Delete Pets**: Update or remove pet entries whenever needed.
- **User Authentication**: Secure login and registration for users.

  <img src="https://github.com/user-attachments/assets/b7314d39-9e79-43a6-a666-67638ba78778" alt="login" width="300"/>

## 🚀 Future Implementation

- **Edit Pets**: Update entries for your pets.
- **View Pets**: Browse through your pet entries in a clean, organized interface.
- **Pet Diary**: Document special moments with your pets by adding diary-like entries with photos, descriptions, and dates.
- **Pet Health Tracking**: Log health-related information like vet visits, vaccinations, and medications.

## 🛠 Tech Stack

### Frontend
- **Vite**: A modern frontend build tool for faster development.
- **React** for the UI framework.
- **CSS**: For styling the application.

### Backend
- **Python Django**: Handles the server-side logic, routing, and database interactions.
- **Django REST Framework**: Manages the API for frontend-backend communication.
- **PostgreSQL**: The database for storing pet entries and user data.
- **Aiven Console**: Database server.

## 🚀 Setup and Installation

### Prerequisites

- **Node.js** (for the Vite frontend)
- **Python** (for the Django backend)
- **Pipenv** (for managing Python dependencies)
- **PostgreSQL**

### Backend (Django)

1. **Clone the repository**:
    ```bash
    git clone https://github.com/cubeydice/mewwoof.git
    cd pet-log/backend
    ```

2. **Create a virtual environment**:
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Install the dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Apply migrations and start the server**:
    ```bash
    python manage.py migrate
    python manage.py runserver
    ```

### Frontend (Vite)

1. **Navigate to the frontend directory**:
    ```bash
    cd ../frontend
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Run the Vite development server**:
    ```bash
    npm run dev
    ```

## 📧 Contact

For any questions, feel free to reach out to [Queen Belle Dela Cruz](mailto:cubeydice@gmail.com).
