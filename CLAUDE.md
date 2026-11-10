# Local Cascade

When a task is about the blog, follow [docs/BLOG-RUNBOOK.md](docs/BLOG-RUNBOOK.md) exactly.

Mint plans topics and hands over the plan. Claude Code writes the posts. Do not invent posts, dates, or a weekday cadence. Publish days are not decided; the owner will choose them later.

Post files live in `content/blog/<slug>.md`. A post stays off the site until its `date` is on or before the build's America/New_York calendar date and production is redeployed. Do not filter posts in the browser.

Do not mention a price. Follow the attorney-advertising rules in the runbook. Do not publish `content/blog/example-format.md`.
