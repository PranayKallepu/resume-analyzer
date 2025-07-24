# Resume Analyzer

A full-stack application for analyzing and managing resumes. This project consists of a backend (Node.js/Express) and a frontend (React + Vite + Tailwind CSS).

## Features

- Upload and analyze resumes (PDF)
- View analysis results and resume history
- Modern UI with responsive design
- Error handling and validation

## Project Structure

```text
backend/    # Node.js/Express backend
frontend/   # React frontend (Vite + Tailwind CSS)
sample_data/ # Example resumes for testing
screenshots/ # App screenshots
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Backend Setup

1. Navigate to the backend folder:

   ```sh
   cd backend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the backend server:

   ```sh
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend folder:

   ```sh
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:

   ```sh
   npm run dev
   ```

### Usage

- Access the frontend at `http://localhost:5173` (default Vite port)
- The backend runs on `http://localhost:3000` by default

## Folder Details

- `backend/controllers/` - API controllers for resume and upload logic
- `backend/routes/` - Express route definitions
- `backend/services/` - Business logic and integrations (e.g., Gemini API)
- `backend/uploads/` - Uploaded resume files
- `frontend/src/components/` - React UI components
- `frontend/src/pages/` - Main app pages
- `frontend/src/lib/` - Utility functions

## Screenshots

Sample resumes are available in the `sample_data/` folder.
Screenshots are available in the `screenshots/` folder.
