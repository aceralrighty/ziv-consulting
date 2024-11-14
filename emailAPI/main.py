from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactRequest(BaseModel):
    full_name: str
    email: str
    message: str

@app.post("/contact")
async def contact(request: ContactRequest):
    return {"message": "Message received!", "data": request.model_dump()}