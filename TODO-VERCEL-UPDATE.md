# Update Vercel Hosted Site to Match Local

Repo up to date with GitHub main, but Vercel site shows old version. Plan to create branch, PR, merge to trigger redeploy.

## Steps:
1. [ ] Install Vercel CLI globally (`npm i -g vercel`).
2. [ ] Authenticate GitHub CLI (`gh auth login`).
3. [ ] Create & switch to branch `blackboxai/update-vercel` (`git checkout -b blackboxai/update-vercel`).
4. [ ] Add/commit any changes (`git add -A && git commit -m \"Update for Vercel redeploy\"` or skip if clean).
5. [ ] Push branch (`git push -u origin blackboxai/update-vercel`).
6. [ ] Create PR (`gh pr create --title \"Update site for Vercel\" --body \"Trigger Vercel redeploy\"`).
7. [ ] User merges PR → Vercel auto-deploys.
8. [ ] Verify live site.
9. [ ] Optional: Manual deploy with `vercel --prod`.

Current progress: TODO created. Next: install Vercel CLI, gh auth.

Note: Current git clean. Vercel.json config good. Build succeeds (terser added).
