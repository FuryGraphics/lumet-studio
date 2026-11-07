# Blog runbook

Follow this file exactly when writing or adding a Local Cascade blog post. Mint plans the topics and hands the plan over. Claude Code writes the posts from that plan. Mint does not write posts. Claude Code does not invent topics.

The public site is https://www.localcascade.com. The Vercel project is `lumet-studio`. Production domains are `localcascade.com` (redirects to www) and `www.localcascade.com`.

## Who decides what

- Mint supplies the topic plan: the subject of each post, and a publish date when the owner has chosen one.
- Claude Code writes the markdown file, adds images, and runs the checklist below.
- Publish days are not decided. The owner will choose them later. Do not invent a weekday cadence. Do not copy a publish schedule from Lorona Mead, Case Climb, or any other site. If the plan has no calendar date for a post, stop and report that the date is missing. Do not guess a date, and do not commit that post.

## Where files live

| What                     | Path                             |
| ------------------------ | -------------------------------- |
| Post                     | `content/blog/<slug>.md`         |
| Images                   | `content/blog/images/`           |
| Format sample (leave it) | `content/blog/example-format.md` |
| This runbook             | `docs/BLOG-RUNBOOK.md`           |

One post per file. The filename is the slug plus `.md`. Do not put a README or any other file in `content/blog/`. Do not put images in `client/public`. The build copies images for live posts only.

`content/blog/example-format.md` is an unpublished format sample dated `2099-01-01`. Leave that date alone. Do not publish it, do not treat its "format sample" sentences as the voice of a real post, and do not delete it.

## Routes

| URL            | Page                                                                           |
| -------------- | ------------------------------------------------------------------------------ |
| `/blog`        | List of live posts. Finished and indexable when the list is empty.             |
| `/blog/<slug>` | One live post. Any other slug, including a scheduled post, shows the site 404. |
| `/rss.xml`     | Feed of live posts only.                                                       |

## Frontmatter

The file starts with frontmatter and then the body. Quote every value. The keys are exactly these, in this order. Unknown keys fail the build. There is no `draft` flag. The date is the only switch.

```yaml
---
title: "Short title, aim for 70 characters or fewer"
description: "One sentence, 160 characters or fewer, used as the meta description."
date: "YYYY-MM-DD"
slug: "same-as-the-filename"
author: "Local Cascade"
cover: "images/your-file.jpg"
coverAlt: "What the image shows, in one sentence."
---
```

| Field         | Rule                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | Required. Plain text. 90 characters maximum. The page title becomes `<title> \| Local Cascade`.                                  |
| `description` | Required. One sentence. 160 characters maximum. This is the meta description and the dek under the title.                        |
| `date`        | Required. A real calendar day, `YYYY-MM-DD`. The day the post may first be included in a build. Not a time, not a weekday name.  |
| `slug`        | Required. Lowercase words separated by single hyphens. Must match the filename.                                                  |
| `author`      | Required. Use `Local Cascade` unless the owner named a person in the plan. Do not invent a person, a credential, or a job title. |
| `cover`       | Optional. A path relative to `content/blog/`, usually `images/<file>`. Local file only. Omit the key when there is no cover.     |
| `coverAlt`    | Required when `cover` is set, forbidden when it is not.                                                                          |

## Body

Markdown, after a blank line under the closing `---`. The title is the frontmatter title. Do not put an `#` heading in the body.

Supported:

- Paragraphs, separated by a blank line.
- `## Heading` and `### Heading`.
- Lists: lines starting with `- ` or `1. `.
- Emphasis: `**bold**` and `*italic*`.
- Links: `[label](/services)` or `[label](https://example.com)`. No `javascript:` links.
- Images: `![Alt text](images/file.jpg)`. Alt text is required. The path is relative to `content/blog/`.
- Quotes: lines starting with `> `.
- Fenced code with triple backticks, when a snippet is actually needed.

Do not paste raw HTML.

The post template already adds this line under the body: "This is general information about a firm's website, not legal advice." Do not contradict it. You do not need to repeat it unless the plan asks for it in the body.

## Voice

Local Cascade builds websites for US attorneys and law firms. Write to a lawyer or a firm owner.

- Calm, plain, and specific. Short sentences. No hype, no slogans, no exclamation points.
- Teach one concrete thing about a firm's website, how the practice is described, how people find the site, or how a visit becomes a conversation.
- "You" and "your firm" are fine. Do not lecture.
- Do not write "game-changer", "unlock", "skyrocket", "crush", or similar sales language.
- Do not invent clients, rankings, percentages, case results, or quotes.
- The rest of the marketing site still speaks to local businesses. Blog posts speak to law firms. Do not drag the homepage price or the homepage slogan into a post.

## Attorney-advertising rules

These posts are public. The build rejects a file that breaks the mechanical rules. Rephrase. Do not try to sneak the word through.

Never write, including inside a warning about the rule itself:

- `expert` or `experts`
- `specialist`, `specialists`, `specialize`, `specialized`, `specialise`, or `specialization`
- `guarantee`, `guaranteed`, `guarantees`, or `guaranteeing`
- `testimonial` or `testimonials`
- `our clients`
- a dollar sign, the word `dollars`, or `USD`

Also do not, even if the checker cannot see it:

- Promise a result, a ranking, a number of calls, or a number of clients.
- Invent a testimonial, a review, a before-and-after, or a result.
- Claim to be the best, the leader, or the only choice.
- Imply that reading the post creates a lawyer-client relationship. The template disclaimer covers legal advice. Leave it.

Say "a firm site" or "the pages" instead of reaching for a banned word. Say "do not promise a result" instead of naming the banned verb.

## Prices

Do not mention any price for Local Cascade's service. No monthly fee, no setup fee, no dollar amount, including $297, $697, or any other figure. Do not mention another company's price either. If the topic cannot be explained without a number, drop the number.

## How dating, hiding, and publishing work

A post is public only after both of these are true:

1. Its `date` is on or before the calendar date of the build in America/New_York.
2. That build is the production deployment currently serving www.localcascade.com.

The check happens when the site is built. It is not a clock in the browser. After midnight, a post that was scheduled for that day is still hidden until production is built again. Redeploying production is what reveals the post. Committing the file early does not.

Consequences:

- Several upcoming posts can be committed in one change. Each stays hidden until a production build on or after its own date.
- A scheduled post is absent from `/blog`, returns the site 404 at its URL, is absent from `sitemap.xml`, is absent from `rss.xml`, and its body is left out of the JavaScript bundle.
- Images for a scheduled post stay in `content/blog/images/` and are not copied into the deployed site.
- Preview deployments use the same rule against that preview's build time. They do not publish a post whose date is still in the future. The public site still changes only when production is redeployed.
- `BLOG_PREVIEW_UNPUBLISHED=1 pnpm dev` shows scheduled posts on your machine so you can read a draft. The flag does nothing for `vite build`, and it is ignored when `VERCEL_ENV=production`. Do not set it on Vercel. Do not deploy a dev server.

A post dated today (New York) is included in a build that runs today. A build that runs late the evening before, even if UTC has already rolled to the next day, does not include it.

To correct a date, change `date` and redeploy production. Moving the date forward hides the post on the next production build.

Publish days stay unset until the owner chooses them. Date each post with the date in Mint's plan. Nothing in this repo publishes "every Tuesday" or any other cadence on its own.

## Images

1. Put the file in `content/blog/images/`. Use `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`, or `.svg`. SVG must not contain script.
2. Reference it from the post as `images/<filename>`, or `images/<folder>/<filename>` if you grouped files.
3. Set `cover` and `coverAlt` together for a cover, and use `![Alt](images/<filename>)` in the body. Every image needs alt text that says what is actually in the picture.
4. Do not use a remote image URL.
5. Do not copy the file into `client/public`. That folder is what gets deployed. `client/public/images/blog/` is generated for live posts and is gitignored.

The deployed URL for a live image is `/images/blog/<slug>/<path-under-images>`. You do not write that URL yourself.

## Sitemap and RSS

`client/public/sitemap.xml` and `client/public/rss.xml` are generated. Do not hand-edit them.

Generation runs inside `vite build`. That is the command Vercel runs for project `lumet-studio`, so a production deploy rebuilds both files. `pnpm sitemap` writes the same files locally.

The sitemap always includes `https://www.localcascade.com/blog`. It includes `https://www.localcascade.com/blog/<slug>` only for posts that pass the date gate. Scheduled posts are never listed. The same set is written to `/rss.xml`.

Canonicals, Open Graph, and JSON-LD for `/blog` and each live post use `https://www.localcascade.com`. The list page is a `Blog`. Each live post is a `BlogPosting`. Scheduled posts get neither a shell nor a JSON-LD entry.

## Checklist before you commit

Run these in order. Do not commit if one fails.

1. The post is from Mint's plan. You did not invent the topic or the date.
2. The file is `content/blog/<slug>.md` and `slug` matches the filename.
3. Frontmatter has `title`, `description`, `date`, `slug`, and `author`. `cover` and `coverAlt` are both set or both absent.
4. `date` is the date from the plan, written `YYYY-MM-DD`. It is in the future if the post should stay hidden.
5. Read the draft out loud against the voice section. No hype. No invented result.
6. Search the draft for `$`, `dollar`, `USD`, `expert`, `specialist`, `specialize`, `guarantee`, `testimonial`, and `our clients`. None of those belong in the file.
7. Every image exists under `content/blog/images/`, has alt text, and is not under `client/public`.
8. `content/blog/example-format.md` is still dated `2099-01-01`.
9. Run `pnpm blog:check`. It validates every post and fails if a scheduled post appears in the sitemap, the RSS feed, or the client source.
10. Run `pnpm sitemap`, then `pnpm blog:check` again. Confirm `client/public/sitemap.xml` contains `https://www.localcascade.com/blog`. Confirm a future slug is absent. Confirm a post dated today or earlier is present.
11. Run `pnpm test`.
12. Do not commit `client/public/images/blog/`. If a local preview created it, `pnpm sitemap` removes images that are not live.
13. Do not set `BLOG_PREVIEW_UNPUBLISHED` for anything that will be deployed.

Commit the markdown file, any new images under `content/blog/images/`, and the regenerated `sitemap.xml` and `rss.xml` if those two changed. A future post in that commit is safe. It stays hidden until a production deploy on or after its date.

## Publishing on the day

When the New York calendar says the date has arrived, redeploy production for Vercel project `lumet-studio`. Merging the post before that date does not publish it. If the merge already happened, the later production deploy is what includes the post. Opening the website at midnight does not.
