# Deployment Guide

## Run Locally (Dev Mode)

```bash
# Step 1: Install dependencies
npm install

# Step 2: Copy your intro video
# Place your .mp4 file at: public/intro.mp4
cp /path/to/your/video.mp4 public/intro.mp4

# Step 3: Start dev server
npm run dev
# Visit: http://localhost:5173
```

## Build & Run Locally (Production Mode)

```bash
npm run build
pip install fastapi uvicorn
python app.py
# Visit: http://localhost:7860
```

## Deploy to HuggingFace Spaces

### Option A: Docker (Recommended)

1. Create a new Space at huggingface.co/spaces
   - SDK: Docker
   - Visibility: Public

2. Clone your space:
   ```bash
   git clone https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME
   cd YOUR_SPACE_NAME
   ```

3. Copy all portfolio files into the cloned folder:
   ```bash
   cp -r /path/to/portfolio/* .
   ```

4. Add your video (required):
   ```bash
   cp /path/to/intro.mp4 public/intro.mp4
   ```
   Note: If video is large (>50MB), use Git LFS:
   ```bash
   git lfs track "*.mp4"
   git add .gitattributes
   ```

5. Push to HuggingFace:
   ```bash
   git add .
   git commit -m "Deploy Chaitanya portfolio"
   git push
   ```

6. HuggingFace will auto-build using Dockerfile.
   Your site will be at: https://YOUR_USERNAME-YOUR_SPACE_NAME.hf.space

### Setting Up AI Chat (Groq API Key)

The AI chat feature uses Groq API. When you visit the portfolio:
1. You'll see a yellow banner asking for a Groq API key
2. Get a free key at: https://console.groq.com
3. Paste it in — it's stored in your browser's localStorage only
4. No key is needed server-side

---

## Alternate: Deploy to Vercel (Simplest)

```bash
npm install -g vercel
npm run build
vercel --prod
```
