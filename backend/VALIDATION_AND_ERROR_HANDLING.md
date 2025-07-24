# Validation and Error Handling in Resume Upload Flow

This document explains how validations and error handling are implemented in the backend for the resume upload and analysis process.

---

## 1. File Type Validation (PDF Only)

- **Where:** `backend/routes/uploadRoutes.js`
- **How:**
  - The `multer` middleware is configured with a `fileFilter` that only accepts files with MIME type `application/pdf`.
  - If a user attempts to upload a non-PDF file, the upload is rejected and a clear error message is returned: `Only PDF files are allowed`.

---

## 2. Empty or Malformed PDF Handling

- **Where:** `backend/controllers/uploadController.js`
- **How:**
  - After upload, the server attempts to read and parse the PDF file.
  - If the file cannot be read, a `400` error is returned: `Failed to read uploaded file.`
  - If the PDF is malformed or cannot be parsed, a `400` error is returned: `Malformed or unreadable PDF file.`
  - If the PDF contains little or no text, a `400` error is returned: `The PDF appears to be empty or does not contain enough text to analyze.`

---

## 3. Gemini AI Analysis Errors

- **Where:** `backend/controllers/uploadController.js` (calls `services/geminiService.js`)
- **How:**
  - If the Gemini API fails or returns an invalid response, a `500` error is returned: `AI analysis failed. Please try again later.`

---

## 4. Database (DB) Errors

- **Where:** `backend/controllers/uploadController.js`
- **How:**
  - If saving the analysis to the database fails, a `500` error is returned: `Failed to save analysis to the database.`

---

## 5. General Error Handling

- **Where:** `backend/controllers/uploadController.js`
- **How:**
  - Any unexpected errors are caught and a generic `500` error is returned: `Unexpected server error.`

---

## 6. User-Friendly Error Messages

- All error responses are structured as JSON with an `error` field, making it easy for the frontend to display helpful feedback to users.

---

## Example Error Responses

```json
// Unsupported file type
{ "error": "No file uploaded or unsupported file type. Please upload a PDF." }

// Malformed PDF
{ "error": "Malformed or unreadable PDF file." }

// Empty PDF
{ "error": "The PDF appears to be empty or does not contain enough text to analyze." }

// Gemini AI error
{ "error": "AI analysis failed. Please try again later." }

// Database error
{ "error": "Failed to save analysis to the database." }
```
