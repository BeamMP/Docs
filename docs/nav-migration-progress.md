---
title: Navigation Migration Progress
description: Legacy MkDocs cleanup audit after canonical navigation migration
status: draft
---

# Navigation Migration Progress

## Legacy MkDocs Content Pending Review (All Locales)

Legacy MkDocs path groups pending review/removal:
- docs/{locale}/API documentation/
- docs/{locale}/beamng/
- docs/{locale}/FAQ/
- docs/{locale}/game/
- docs/{locale}/guides/
- docs/{locale}/scripting/
- docs/{locale}/server/
- docs/{locale}/index.md
- docs/{locale}/contributing.md

### Remaining Legacy Files by Locale
- en: **40**
- de: **28**
- fr: **19**
- es: **16**
- it: **25**
- ru: **34**
- zh: **40**

Total remaining legacy MkDocs files across tracked locales: **202**

---

## EN Detailed Audit

## Summary
- Total EN markdown files: **83**
- Files in new canonical structure: **43**
- Files still outside new canonical structure: **40**

This EN section lists exactly what is still outside the new canonical EN roots and should be reviewed before cleanup.

## New Canonical Structure Roots
- docs/en/get-started/
- docs/en/players/
- docs/en/server-owners/
- docs/en/developers/
- docs/en/game-documentation/
- docs/en/troubleshooting/
- docs/en/community/

## Folders Still Outside Canonical Structure
- docs/en/API documentation/
- docs/en/beamng/
- docs/en/FAQ/
- docs/en/game/
- docs/en/guides/
- docs/en/scripting/
- docs/en/server/

## Root-Level EN Files Outside Canonical Structure
- docs/en/index.md
- docs/en/contributing.md

## EN Files Outside Canonical Structure (Manual Review)
_These files still live outside the new canonical EN roots. Some are intentionally retained as legacy compatibility pages, others may require migration or aliasing decisions._

- docs/en/index.md
- docs/en/contributing.md
- docs/en/API documentation/Client-Side.md
- docs/en/API documentation/Server-Side.md
- docs/en/beamng/index.md
- docs/en/beamng/cef-snippets.md
- docs/en/beamng/css-snippets.md
- docs/en/beamng/imgui-snippets.md
- docs/en/beamng/lua-snippets.md
- docs/en/beamng/dev/index.md
- docs/en/beamng/dev/content/maps.md
- docs/en/beamng/dev/content/props.md
- docs/en/beamng/dev/content/vehicles.md
- docs/en/beamng/dev/modding/imgui-window-tutorial.md
- docs/en/beamng/dev/modding/imgui-windows.md
- docs/en/beamng/dev/modding/lua-mods.md
- docs/en/beamng/dev/modding/ui-apps.md
- docs/en/FAQ/Change-launcher-port.md
- docs/en/FAQ/Clearing-mods.md
- docs/en/FAQ/Defender-exclusions.md
- docs/en/FAQ/game-faq.md
- docs/en/FAQ/How-to-check-for-CGNAT.md
- docs/en/FAQ/player-faq.md
- docs/en/FAQ/server-faq.md
- docs/en/FAQ/Update-launcher.md
- docs/en/FAQ/where-to-find-my-IP.md
- docs/en/game/getting-started.md
- docs/en/game/multiplayer-settings.md
- docs/en/game/error-codes.md
- docs/en/guides/index.md
- docs/en/guides/beammp-dev/beammp-dev.md
- docs/en/guides/mod-creation/server/getting-started.md
- docs/en/scripting/mod-reference.md
- docs/en/scripting/server/latest-server-reference.md
- docs/en/scripting/server/v2-server-reference.md
- docs/en/server/create-a-server.md
- docs/en/server/manual.md
- docs/en/server/port-forwarding.md
- docs/en/server/server-maintenance.md
- docs/en/server/error-codes.md

## Notes
- No files were deleted as part of this migration.
- This report is intended for manual review before any cleanup/removal phase.
- Non-EN locales were migrated to canonical paths with copy-first behavior; legacy files were retained for compatibility and review.
