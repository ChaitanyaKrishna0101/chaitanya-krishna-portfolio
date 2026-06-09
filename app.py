import os
from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

app = FastAPI()

dist_path = Path(__file__).parent / "dist"

# Mount assets folder
app.mount("/assets", StaticFiles(directory=str(dist_path / "assets")), name="assets")

# Serve individual static files from dist root
@app.get("/intro.mp4")
async def serve_video():
    return FileResponse(str(dist_path / "intro.mp4"), media_type="video/mp4")

@app.get("/favicon.svg")
async def serve_favicon():
    return FileResponse(str(dist_path / "favicon.svg"), media_type="image/svg+xml")

# SPA fallback
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