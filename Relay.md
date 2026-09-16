# Relay

**A hands-free action agent. You say what you want; it does the clicking and typing for you.**

Relay listens to a spoken (or typed) goal, plans the steps with an LLM, carries them out against your real Gmail, and stops to ask before anything irreversible. See [PRD.md](./PRD.md) for the full product spec and [PLAN.md](./PLAN.md) for how it was built, milestone by milestone.

<!-- DEMO: record a clip of the full loop — speak a reply command, watch it plan
     and draft, confirm by voice, and see it send — then drop it here.
     ![demo](./docs/demo.gif) -->
**Demo clip: TODO — not recorded yet.**

---

## What it does

1. You say *"reply to Priya — tell her Thursday works."*
2. It transcribes what you said and shows it on screen.
3. An LLM turns that into a structured plan: find the thread, draft a reply, save it, send it — tagging the send step as **irreversible**.
4. It executes the reversible steps for real against your Gmail (finds the thread, creates an actual draft) and **halts** at the irreversible one.
5. It shows you the exact draft and waits. You say **"send"** and it goes — or **"change it"** and it revises the draft — or **"stop"** and it cancels. Nothing is ever sent without that explicit step.

The same loop also handles composing a brand-new message to someone (not just replying), and works whether you talk, type, or pinch to confirm.

---

## How it works

```
┌──────────┐   text    ┌────────────┐  plan   ┌───────────┐ result ┌──────────┐
│ LISTENER │ ────────▶ │ INTERPRETER│ ──────▶ │ EXECUTOR  │ ─────▶ │   UI     │
│ voice /  │           │ goal → steps│         │ acts on   │        │ shows it │
│ gesture /│ ◀──────── │   (Groq)    │ ◀────── │ Gmail     │ ◀───── │ all live │
│ text     │  confirm  └────────────┘         └───────────┘        └──────────┘
└──────────┘
```

- **Listener** (`src/modules/listener.js`) — Web Speech API, streamed transcription. Typed text is an equal-status fallback.
- **Interpreter** (`src/modules/interpreter.js`) — sends the transcript to Groq (`openai/gpt-oss-120b`) with a strict JSON response schema; gets back an ordered step plan, each step tagged `reversible`/not, plus a proposed draft.
- **Executor** (`src/modules/gmail.js`) — a browser-only OAuth connection to Gmail. Finds the right thread (for replies) or resolves a name to an address by searching your own mail history (for new messages, no extra Contacts permission needed), creates a real draft, and — only after confirmation — sends it.
- **Waveform / Gesture** (`src/modules/waveform.js`, `src/modules/gesture.js`) — the visible layer: a real mic-driven waveform while listening, and an optional live hand-landmark overlay for a pinch-to-confirm gesture, both smoothed so they don't jitter.
- **UI** (`src/main.js` + `index.html`/`style.css`) — the input rail, agent trace, and draft preview, all reflecting the above live.

---

## Controls

| Input | Effect |
| --- | --- |
| Click the mic, or hold `Space` | Start/stop listening |
| Type in the text box, `Enter` or `→` | Submit a command without voice |
| Say **"send"**, or click **Send** | Confirm and actually send (only step that's irreversible) |
| Say **"change it [+ what to change]"**, or click **Change it** | Revise the current draft and re-ask |
| Say **"stop"**, or click **Stop** | Cancel — the draft stays in Gmail, untouched, nothing is sent |
| Pinch (thumb + index finger) while gesture confirm is enabled | Same as saying "send" — a mouse-free alternative |

Gesture confirm is opt-in (click **"🤏 Enable gesture confirm"**) since it requests camera access; it only ever *confirms* a pending send, it never triggers new commands.

---

## Getting started

### 1. Prerequisites
- Node.js
- Chrome or Edge (voice input needs the Web Speech API — Firefox doesn't support it; the typed-text fallback works everywhere)

### 2. Install

```bash
cd relay
npm install
```

### 3. Configure

Copy `relay/.env.example` to `relay/.env` and fill in:

| Variable | Where to get it |
| --- | --- |
| `VITE_GROQ_API_KEY` | [console.groq.com/keys](https://console.groq.com/keys) — free tier |
| `VITE_GEMINI_MODEL` | defaults to `gemini-3.6-flash` if unset |
| `VITE_GOOGLE_CLIENT_ID` | [console.cloud.google.com](https://console.cloud.google.com) → enable the Gmail API → OAuth consent screen (add yourself as a test user) → Credentials → OAuth client ID, type **Web application**, with your dev origin (`http://localhost:5173`) as an Authorized JavaScript origin. This is a browser-only token flow — only the Client ID is needed, never the client secret. |

### 4. Run

```bash
npm run dev
```

Open the printed `http://localhost:5173/`, allow mic access, and connect Google via the button in the header.

---

## Safety design

The confirmation gate is the point of the project, not an afterthought:

- Every plan step is tagged `reversible` or not by the interpreter — only an actual **send** is irreversible.
- The executor runs reversible steps automatically (find thread, create draft) but **never** the send step — it halts and shows the full draft.
- The only paths to an actual send (or trash, or calendar invite) are an explicit voice/typed word, a button click, or a pinch — all funneled through the same `confirmAction()` code path.
- Failures are shown, not hidden: a failing step flashes red, retries once, and only then reports a permanent failure with a clear message.

---

## Tech stack

| Piece | Choice |
| --- | --- |
| Build | Vite, vanilla JS (no framework) |
| Voice | Web Speech API |
| Gesture | MediaPipe Tasks Vision (`HandLandmarker`) |
| Interpreter | Groq API (`openai/gpt-oss-120b`), structured JSON output |
| Executors | Gmail, Contacts, Calendar, Drive APIs via one shared Google Identity Services OAuth token flow |

No backend — everything, including the LLM and Google API calls, runs client-side.

---



https://github.com/user-attachments/assets/006f0789-ad53-4f79-a970-f8718e2eb252

