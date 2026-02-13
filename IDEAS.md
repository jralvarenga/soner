# Soner — product ideas & scope

## Core concept

**Soner** is a local-first task manager: add tasks anytime, anywhere, and optionally collaborate with others via email—including people who never create an account.

---

## Principles

1. **Local first** — Data lives on the device; sync is additive, not required to use the app.
2. **Low friction** — Guests can participate via email without sign-up.
3. **Progressive depth** — Simple list for guests; statuses, goals, projects, and assignment for signed-in users.

---

## User modes

### Signed-in users

- Full task list with **statuses**
- **Goals** and **projects** to group work
- **Assign** tasks to self or others (by email)
- Sync across devices and collaborate with invited people

### No-account (guest) users

- **Device-only tasks** — create and edit tasks only on this device
- No statuses, goals, or projects
- Cannot assign tasks to anyone
- Use case: quick personal list or trying the app before signing up

---

## Ideas to explore

### Collaboration

- Invite by email; collaborator gets a magic link (no account creation).
- Optional: guest can later “claim” their contributions by creating an account.
- Shared lists or projects where invited emails can add/edit tasks (within permissions).

### Local-first & sync

- Offline-first: all writes go to local store first.
- Background sync when online; conflict handling (e.g. last-write-wins or simple merge rules).
- Optional: “sync this device” vs “device-only” toggle for guests.

### Tasks

- Rich tasks: title, description, due date, status (for signed-in users).
- For guests: title (and maybe description), no status.
- Signed-in: filters by status, assignee, project, goal.

### Goals & projects

- Goals: high-level outcomes; tasks can be linked to goals.
- Projects: containers for goals and tasks; optional deadlines.
- Only for signed-in users; not available in guest mode.

### Assignments

- Assign tasks to people by email (signed-in users only).
- Assigned person gets notification/link; they can open via email without an account and see/complete “their” tasks.
- Guests cannot assign; they only have a personal device list.

### UX

- Clear mode indicator: “You’re in guest mode” vs “Signed in as …”.
- One-tap “Create account” from guest mode to keep their data and unlock features.
- Simple onboarding: “Add a task” first; explain statuses/goals/projects later.

### Technical

- Sync layer (e.g. CRDTs or timestamp-based merge) for local-first.
- Email-based identity for guests (magic links, no password).
- Rate limits and abuse protection on invite and magic-link flows.

---

## Out of scope (for now)

- Full project management (Gantt, dependencies, etc.).
- Real-time presence (“X is editing”).
- Native mobile apps (web-first; PWA possible later).

---

## Summary

| Feature            | Guest (no account)     | Signed-in user   |
|--------------------|------------------------|------------------|
| Create tasks       | Yes (this device only) | Yes (synced)     |
| Statuses           | No                     | Yes              |
| Goals              | No                     | Yes              |
| Projects           | No                     | Yes              |
| Assign tasks       | No                     | Yes              |
| Collaborate via email | View/edit when invited | Full collaboration |
