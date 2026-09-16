# Ghostframe

A real-time "invisibility cloak" built with hand tracking and canvas compositing — no model training, no backend, no complicated setup.

Capture a still of the empty background, then trace a shape with your fingertips. Wherever that shape moves, the frozen background shows through instead of you — like a dynamically-drawn green screen powered by your hands.

Includes two versions:
- **Browser** (`invisibility_cloak.html`) — a single self-contained HTML file, runs entirely client-side
- **Python** (`invisibility_cloak.py`) — an OpenCV + MediaPipe desktop version

## Demo

> add a gif or short clip here

## How it works

1. **Capture background** — grab one still frame of the empty scene and hold it in memory.
2. **Track hands** — MediaPipe's hand landmark model detects 21 points per hand in real time; only 2 are used per hand — the thumb tip and index fingertip.
3. **Build a polygon** — the active fingertip points (up to 4, across both hands) are sorted angularly around their centroid, producing a clean, non-self-intersecting shape every frame.
4. **Smooth it** — each hand's points are exponentially smoothed and tracked by handedness label ("Left"/"Right"), so the shape doesn't jitter or flip when detection order changes between frames.
5. **Composite** — the polygon becomes a soft-edged mask. Wherever the mask is active, pixels from the frozen background are blended in over the live camera feed instead of the current frame, creating the reveal effect.

No object detection, segmentation model, or custom training involved — just landmark tracking, geometry, and alpha compositing.

## Getting started

### Browser version

No installation required.

```bash
open invisibility_cloak.html
```

Open it directly in Chrome (recommended for GPU-accelerated MediaPipe). Click **Start Camera**, allow webcam access, and you're set.

### Python version

```bash
pip install opencv-python mediapipe numpy
python invisibility_cloak.py
```

## Controls

| Key | Browser | Python |
|---|---|---|
| Capture background | **Capture Background** button | `b` |
| Clear background | **Clear Background** button | `c` |
| Adjust edge softness | **Feather** slider | `[` / `]` |
| Adjust smoothing | **Smoothing** slider | `-` / `=` |
| Quit | close tab | `q` |

## Tech stack

- [MediaPipe](https://developers.google.com/mediapipe) — hand landmark detection (Tasks Vision API in browser, `solutions.hands` in Python)
- Canvas 2D API (`destination-in` compositing) for the browser version
- OpenCV (`cv2.fillPoly`, `cv2.GaussianBlur`, manual alpha blending) for the Python version




https://github.com/user-attachments/assets/0da5fc89-7723-45f6-9f35-b6ac56f33922




