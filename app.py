"""
HuggingFace Spaces entry point.
Serves the built React portfolio as a static site.
"""
import os
from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()

dist_path = Path(__file__).parent / "dist"

# Mount static assets
app.mount("/assets", StaticFiles(directory=str(dist_path / "assets")), name="assets")

@app.get("/")
@app.get("/{path:path}")
async def serve_spa(path: str = ""):
    index = dist_path / "index.html"
    if index.exists():
        return FileResponse(str(index))
    return {"error": "Build not found. Run: npm run build"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 7860))
    uvicorn.run(app, host="0.0.0.0", port=port)
