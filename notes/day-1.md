# How Senior Engineers Actually Build With AI in 2026 | Build a Full Stack Systems Architecture App

youtube link - https://www.youtube.com/watch?v=14RP8liACqo&t=4116s


## Timestamps: 
00:00:00 — Introduction
00:03:15 — Crash Course
00:14:31 — Project Setup
00:21:43 — Preparing Context
00:39:51 — UI Primitive Components
00:48:14 — Layout Setup
00:58:17 — Authentication
01:21:05 — Project Dialogues
01:31:00 — Prisma Setup
01:38:58 — Project CRUD APIs
01:51:18 — Editor: Access Sharing
02:04:02 — Editor: Liveblocks Canvas
02:23:54 — Editor: Canvas Features
02:46:19 — Avatar Feature, Chat Sidebar UI & Auto Save
03:05:01 — Trigger.dev Setup
03:15:32 — AI Architecture Design Generation Flow
03:39:21 — AI Spec Generation
03:50:28 — Deployment



------------------

## I. Introduction & Methodology (0:00:00 - 0:14:31)

### The "Vibe Coding" Trap: 
Relying solely on AI to write code often leads to messy, unmaintainable projects as agents drift and lose context.

### Senior Engineering Mindset:
Success in 2026 relies on system-level architectural thinking. Developers must act as architects who design the system before the AI implements it.

### Spec-Driven Development:

- A disciplined workflow where projects are broken into small, concrete units.
- Each unit is defined by a Feature Spec (a document detailing goals, design, and success criteria).

### The Six-File Context System: 
A centralized context/ folder that provides the AI agent with a "brain" for the project. The agent must read these files before any implementation:

1. `Project Overview`: Product goals, features, and scope.
2. `Architecture`: System structure, boundaries, and data invariants.
3. `UI Context`: Design tokens, colors, and typography.
4. `Code Standards`: Shared implementation rules and conventions.
5. `AI Workflow Rules`: Rules for scoping and delivery.
6. `Progress Tracker`: Current phase, completed tasks, and next steps (must be updated after every session).

## II. Tech Stack Selection (0:03:15)

### Framework: 
Next.js and React 19.

### Database:
Prisma and PostgreSQL.

### Auth:
Clerk for user management and route protection.

### Collaboration:
Liveblocks for real-time collaborative canvas features.

### Background Processing:
Trigger.dev for long-running AI tasks without API timeouts.

### Storage:
Vercel Blob for storing large files like markdown specs and snapshots.

## III. Project Lifecycle & Features (0:14:31 - 0:39:51)

### Project Setup:
Initializing with Next.js, performing codebase cleanup, and establishing basic structure.

### UI Primitives:
Defining core components based on the ui-context.md to ensure design consistency.

### Authentication:
Implementing Clerk to manage users and secure project access.

### Editor Canvas:
Using Liveblocks to render interactive, shared nodes and edges (integrated with React Flow).

### AI Integration:
Using Trigger.dev to orchestrate an AI agent that generates architectural designs from text prompts, which are then synced to the canvas.

### Spec Generation:
Converting canvas diagrams into structured technical specifications (markdown) stored in Vercel Blob.







