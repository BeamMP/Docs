---
title: Navigation Structure Proposal
description: Proposed information architecture and navigation for BeamMP Docs
status: draft
---

# BeamMP Docs Navigation Proposal

## Goal
Make docs easier to navigate for first-time users while still supporting advanced/server/developer workflows.

## Key Problems in Current Nav
- Audience types are mixed together (players, server owners, developers).
- BeamMP-specific docs and BeamNG/game docs are split in ways that are not obvious to new users.
- FAQ and troubleshooting content is scattered.
- Sidebar mirrors global nav, making in-section navigation noisy.

## Proposed Top-Level Navigation
1. Get Started
2. Players
3. Server Owners
4. Developers
5. Game Documentation
6. Troubleshooting
7. Community

## Full Proposed Navigation Tree (At a Glance)

```text
Home
├─ Get Started
│  ├─ Install BeamMP
│  ├─ Join Your First Server
│  └─ First-Time Multiplayer Settings
├─ Players
│  ├─ Gameplay Basics
│  ├─ Multiplayer Settings
│  ├─ Player FAQ
│  └─ Mod Safety & Local Mod Management
├─ Server Owners
│  ├─ Host a Server
│  ├─ Port Forwarding
│  ├─ Check for CGNAT
│  ├─ Server Maintenance
│  ├─ Server FAQ
│  └─ Server Error Codes
├─ Developers (BeamMP)
│  ├─ Development Environment Setup
│  ├─ Mod & Resource Creation
│  └─ BeamMP Scripting Reference
│     ├─ Mod (In-Game)
│     └─ Server
│        ├─ v3 (Latest)
│        └─ v2 (Legacy)
├─ Game Documentation (BeamNG)
│  ├─ Content Development Introduction
│  ├─ Programming
│  │  ├─ UI Apps (HTML/CEF)
│  │  ├─ Lua
│  │  └─ ImGui
│  ├─ Content Creation
│  │  ├─ Maps
│  │  ├─ Props
│  │  └─ Vehicles
│  └─ Code Snippets
│     ├─ Lua
│     ├─ CSS
│     ├─ ImGui
│     └─ CEF
├─ Troubleshooting
│  ├─ Launcher Update Issues
│  ├─ Connection / Networking Issues
│  ├─ Error Codes (Game + Server)
│  └─ Defender / Firewall Exclusions
└─ Community
  ├─ Community Info
  ├─ Rules
  └─ Contributing
```

## Proposed File & Folder Structure (Markdown)

The navigation changes above can be supported by restructuring content into audience-first sections.

### Canonical source structure (English)

```text
docs/
└─ en/
  ├─ index.md
  ├─ get-started/
  │  ├─ index.md
  │  ├─ install-beammp.md
  │  ├─ join-first-server.md
  │  └─ multiplayer-settings-quickstart.md
  ├─ players/
  │  ├─ index.md
  │  ├─ gameplay-basics.md
  │  ├─ multiplayer-settings.md
  │  ├─ faq.md
  │  └─ mod-safety.md
  ├─ server-owners/
  │  ├─ index.md
  │  ├─ host-a-server.md
  │  ├─ port-forwarding.md
  │  ├─ cgnat.md
  │  ├─ maintenance.md
  │  ├─ faq.md
  │  └─ error-codes.md
  ├─ developers/
  │  ├─ index.md
  │  ├─ dev-environment-setup.md
  │  ├─ mod-and-resource-creation.md
  │  └─ beammp-scripting/
  │     ├─ index.md
  │     ├─ mod-in-game.md
  │     └─ server/
  │        ├─ latest.md
  │        └─ legacy-v2.md
  ├─ game-documentation/
  │  ├─ index.md
  │  ├─ content-development/
  │  │  ├─ index.md
  │  │  ├─ maps.md
  │  │  ├─ props.md
  │  │  └─ vehicles.md
  │  ├─ programming/
  │  │  ├─ ui-apps-html-cef.md
  │  │  ├─ lua.md
  │  │  └─ imgui.md
  │  └─ snippets/
  │     ├─ lua-snippets.md
  │     ├─ css-snippets.md
  │     ├─ imgui-snippets.md
  │     └─ cef-snippets.md
  ├─ troubleshooting/
  │  ├─ index.md
  │  ├─ launcher-update.md
  │  ├─ connection-networking.md
  │  ├─ defender-exclusions.md
  │  └─ error-codes.md
  └─ community/
    ├─ index.md
    ├─ rules.md
    └─ contributing.md
```

### Localized content structure

Each locale mirrors the same section layout to keep URLs and nav predictable:

```text
docs/
├─ de/
├─ es/
├─ fr/
├─ it/
├─ ru/
└─ zh/
  (same folder pattern as /en)
```

### Migration notes
- Start with nav/URL aliases first; avoid breaking links immediately.
- Move files incrementally by section (Get Started -> Players -> Server Owners -> etc.).
- Keep redirects for old paths during transition.
- Treat `/en` as canonical; localizations can follow as translated pages are ready.

## Proposed Section Structure

### 1) Get Started
- Install BeamMP
- Join your first server
- First-time multiplayer settings

### 2) Players
- Gameplay basics
- Multiplayer settings
- Player FAQ
- Mod safety and local mod management

### 3) Server Owners
- Create a server
- Port forwarding
- CGNAT
- Server maintenance
- Server FAQ
- Server error codes

### 4) Developers (BeamMP-focused)
- Dev environment setup
- Mod & resource creation
- BeamMP scripting reference
  - Mod (in-game)
  - Server v3 (primary)
  - Server v2 (legacy)

### 5) Game Documentation (BeamNG-focused)
- Content development intro
- Programming
  - UI apps (HTML/CEF)
  - Lua
  - ImGui
- Content creation
  - Maps
  - Props
  - Vehicles
- Code snippets
  - Lua
  - CSS
  - ImGui
  - CEF

### 6) Troubleshooting
- Launcher update issues
- Connection/network issues
- Error code hubs (game + server)
- Defender/firewall exclusions

### 7) Community
- Community info
- Rules
- Contributing

## Design Principles
- Audience-first labels over technical labels.
- Task-oriented wording (e.g., “Host a Server” instead of “Running a BeamMP-Server”).
- Keep BeamMP docs separate from BeamNG/game docs, but cross-link both directions.
- Keep legacy content available but visually de-emphasized.
- Section-specific sidebars instead of global sidebar duplication.

## Suggested Naming Changes
- “Support” -> “Players”
- “Development Guides” -> “Developers”
- “BeamNG Documentation” -> “Game Documentation”
- “FAQ” -> split into section-owned FAQ + central Troubleshooting hub

## Rollout Plan (Recommended)
1. Align on IA and labels (this proposal).
2. Update global nav only (no URL changes).
3. Introduce section-specific sidebars.
4. Add cross-links and “Start here” blocks on section index pages.
5. Optionally reorganize URLs later if needed.

## Open Questions for Team
1. Should “Troubleshooting” be a top-level item or integrated into each audience section?
2. Should “Game Documentation” appear before “Developers” for visibility?
3. Do we keep one shared FAQ area, or split FAQ by audience entirely?
4. Should v2 server scripting be moved under an explicit “Legacy” section?

## Success Criteria
- New users can find installation/joining content in <= 2 clicks.
- Server owners can find hosting/networking docs in <= 2 clicks.
- Developers can find BeamMP API docs and BeamNG docs without ambiguity.
- Lower bounce rate from index pages and fewer support questions for discoverability.
