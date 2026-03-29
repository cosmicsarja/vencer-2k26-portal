# Task: Fix errors in src/data/events.ts

## Plan Steps:
1. [x] Fix Event interface: Remove duplicate `date` declarations.
 2. [x] Add `as const` to all category literals consistently.
 3. [ ] Ensure all events have required fields like `date`, add missing optionals (branch for top-level events).
 4. [ ] Clean up arrays (remove trailing commas, fill missing data).
 5. [ ] Edit src/data/events.ts with all changes.
 6. [ ] Verify: Run TypeScript compiler/linter.
 7. [ ] Test: Check /events and /branches pages.
 8. [ ] Mark complete.

Current progress: Categories fixed in CSE branch. Continuing with remaining categories, top-level events, cleanups.

