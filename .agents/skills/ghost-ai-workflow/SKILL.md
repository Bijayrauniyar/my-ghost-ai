---
name: ghost-ai-workflow
description: >-
  Use this skill whenever developing, implementing features, refactoring, or making architectural decisions for the Ghost AI project. Enforces reading project context files in order, adhering to current Next.js rules, and updating progress tracking.
---

# Ghost AI Development & Workflow Guidelines

Follow these guidelines whenever implementing features, planning changes, or making architectural decisions in the Ghost AI project.

## 1. Next.js Breaking Changes & Conventions

- Modern Next.js versions include breaking changes where APIs, conventions, and file structure differ from older versions or standard training defaults.
- Always inspect documentation or relevant guides in `node_modules/next/dist/docs/` before writing code when dealing with Next.js specific APIs.
- Heed deprecation notices and adhere to current App Router conventions.

## 2. Application Context Verification Order

Before implementing any significant change or making architectural choices, read the following project context files in order:

1. [context/project-overview.md](file:///Users/bijayrauniyar/professional/Build%20with%20AI/ghost-ai/context/project-overview.md) — Product definition, goals, features, and scope.
2. [context/architecture-context.md](file:///Users/bijayrauniyar/professional/Build%20with%20AI/ghost-ai/context/architecture-context.md) — System structure, boundaries, storage model, and invariants.
3. [context/ui-context.md](file:///Users/bijayrauniyar/professional/Build%20with%20AI/ghost-ai/context/ui-context.md) — Theme, colors, typography, canvas design, and component conventions.
4. [context/code-standards.md](file:///Users/bijayrauniyar/professional/Build%20with%20AI/ghost-ai/context/code-standards.md) — Implementation rules and coding conventions.
5. [context/ai-workflow-rules.md](file:///Users/bijayrauniyar/professional/Build%20with%20AI/ghost-ai/context/ai-workflow-rules.md) — Development workflow, scoping rules, and delivery approach.
6. [context/progress-tracker.md](file:///Users/bijayrauniyar/professional/Build%20with%20AI/ghost-ai/context/progress-tracker.md) — Current phase, completed work, open questions, and next steps.

## 3. Progress Tracking & Documentation Updates

- **Mandatory Update**: Always update [context/progress-tracker.md](file:///Users/bijayrauniyar/professional/Build%20with%20AI/ghost-ai/context/progress-tracker.md) after each meaningful implementation change.
- **Context Synchronization**: If an implementation changes the architecture, scope, design system, or standards documented in the context files, update the relevant context file before concluding the task.
