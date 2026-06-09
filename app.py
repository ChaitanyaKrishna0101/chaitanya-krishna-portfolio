import os
import httpx
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()
dist_path = Path(__file__).parent / "dist"

@app.post("/api/chat")
async def chat_proxy(request: Request):
    body = await request.json()
    key = os.environ.get("GROQ_API_KEY", "")
    if not key:
        return {"error": {"message": "API key not configured on server"}}
    async with httpx.AsyncClient() as client:
        res = await client.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
            json=body,
            timeout=30,
        )
    return res.json()

app.mount("/assets", StaticFiles(directory=str(dist_path / "assets")), name="assets")

@app.get("/")
@app.get("/{path:path}")
async def serve_spa(path: str = ""):
    index = dist_path / "index.html"
    if index.exists():
        return FileResponse(str(index))
    return {"error": "Build not found"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 7860))
    uvicorn.run(app, host="0.0.0.0", port=port)