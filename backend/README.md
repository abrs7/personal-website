# Backend API

FastAPI backend for personal website handling contact form submissions and resume downloads.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Create a `.env` file:
```bash
# Copy the example and edit with your values
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
TO_EMAIL=your-email@gmail.com
FRONTEND_URL=http://localhost:5173
```

3. Configure your email settings in `.env`:
   - For Gmail, you'll need to generate an App Password
   - Go to your Google Account → Security → 2-Step Verification → App Passwords
   - Use the app password as `SMTP_PASSWORD`

4. Add your resume file:
   - Create a `resume` directory in the `backend` folder
   - Place your resume PDF as `resume/resume.pdf`

## Running the Server

```bash
# Development
uvicorn main:app --reload --port 8000

# Or using Python
python main.py
```

The API will be available at `http://localhost:8000`

## API Endpoints

- `GET /` - API information
- `GET /health` - Health check
- `POST /api/contact` - Send contact form email
- `GET /api/resume/download` - Download resume PDF

## API Documentation

Once the server is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`




