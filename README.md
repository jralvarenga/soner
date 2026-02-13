# Soner

A **local-first** task manager. Add tasks anytime, anywhere—solo or with others. Collaborate via email with people who don’t have an account; no sign-up required to participate.

## What is Soner?

- **Local first** — Your data lives on your device first. Work offline; sync when you’re back online.
- **Add tasks anywhere** — Capture tasks from any device, any place.
- **Collaboration via email** — Invite others by email. They can join and contribute without creating an account.
- **Two modes** — Signed-in users get the full experience; guests get a simple, device-only task list.

## User modes

### Signed-in users

- Create and manage **tasks** with statuses
- Organize work with **goals** and **projects**
- **Assign** tasks to yourself or teammates
- Sync and collaborate across devices and with others

### No-account (guest) users

- Create **tasks only on this device** — no sync, no cloud
- No statuses, goals, or projects
- Cannot assign tasks to anyone
- Ideal for trying the app or a minimal personal list

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                |
|-------------------|----------------------------|
| `bun run dev`     | Start dev server (port 3000) |
| `bun run build`   | Production build           |
| `bun run preview` | Preview production build   |
| `bun run test`    | Run tests (Vitest)         |
| `bun run format`  | Format with Biome          |
| `bun run lint`    | Lint with Biome            |
| `bun run check`   | Lint + format check        |
| `bun run db:push` | Push schema (Drizzle)      |
| `bun run db:studio` | Open Drizzle Studio     |

## Stack

- [TanStack Start](https://tanstack.com/start) — Full-stack React
- [TanStack Router](https://tanstack.com/router) — File-based routing
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Biome](https://biomejs.dev/) — Lint & format
- [Drizzle](https://orm.drizzle.team/) — DB & migrations
- [Better Auth](https://www.better-auth.com/) — Auth & sessions

## Learn more

- [TanStack](https://tanstack.com)
- [TanStack Start](https://tanstack.com/start)
