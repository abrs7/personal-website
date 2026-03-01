from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.exceptions import RequestValidationError
from pydantic import BaseModel, EmailStr, field_validator, ConfigDict
from typing import Optional
import os
from pathlib import Path
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="Personal Website API", version="1.0.0")


# Validation error handler
@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    """Handle validation errors and return detailed error messages"""
    errors = []
    for error in exc.errors():
        field = ".".join(str(loc) for loc in error["loc"])
        errors.append({
            "field": field,
            "message": error["msg"],
            "type": error["type"]
        })
    return JSONResponse(
        status_code=422,
        content={
            "detail": "Validation error",
            "errors": errors
        }
    )


# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:5174",
        os.getenv("FRONTEND_URL", "http://localhost:5173")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    projectType: str
    budget: Optional[str] = None
    timeline: Optional[str] = None
    message: str
    
    @field_validator('company', 'budget', 'timeline', mode='before')
    @classmethod
    def empty_str_to_none(cls, v):
        """Convert empty strings to None for optional fields"""
        if v == '':
            return None
        return v
    
    model_config = ConfigDict(
        # Allow camelCase field names (alias support)
        populate_by_name=True
    )


class EmailResponse(BaseModel):
    success: bool
    message: str


# Email configuration
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USERNAME = os.getenv("SMTP_USERNAME","abrahamasrat791@gmail.com")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD","hxcdsjyenuhfysyf")
TO_EMAIL = os.getenv("TO_EMAIL", SMTP_USERNAME)  # Email to receive contact form submissions

# Resume file path
RESUME_PATH = Path(__file__).parent / "resume" / "resume.pdf"


@app.get("/")
async def root():
    return {"message": "Personal Website API", "version": "1.0.0"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.post("/api/contact", response_model=EmailResponse)
async def send_contact_email(contact: ContactForm):
    """
    Send email from contact form submission
    """
    if not SMTP_USERNAME or not SMTP_PASSWORD:
        raise HTTPException(
            status_code=500,
            detail="Email service is not configured. Please set SMTP_USERNAME and SMTP_PASSWORD environment variables."
        )

    try:
        # Create email message
        msg = MIMEMultipart()
        msg['From'] = SMTP_USERNAME
        msg['To'] = TO_EMAIL
        msg['Subject'] = f"New Contact Form Submission from {contact.name}"
        
        # Create email body
        body = f"""
        New contact form submission received:
        
        Name: {contact.name}
        Email: {contact.email}
        Company: {contact.company or 'Not provided'}
        Project Type: {contact.projectType}
        Budget: {contact.budget or 'Not provided'}
        Timeline: {contact.timeline or 'Not provided'}
        
        Message:
        {contact.message}
        
        ---
        This email was sent from your personal website contact form.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
        
        return EmailResponse(
            success=True,
            message="Email sent successfully"
        )
    
    except smtplib.SMTPException as e:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to send email: {str(e)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"An error occurred: {str(e)}"
        )


@app.get("/api/resume/download")
async def download_resume():
    """
    Download resume PDF file
    """
    try:
        # Resolve absolute path
        abs_path = RESUME_PATH.resolve()
        
        if not abs_path.exists():
            raise HTTPException(
                status_code=404,
                detail=f"Resume file not found at {abs_path}. Please upload a resume.pdf file to the backend/resume/ directory."
            )
        
        return FileResponse(
            path=str(abs_path),
            filename="resume.pdf",
            media_type="application/pdf"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error serving resume file: {str(e)}"
        )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)


