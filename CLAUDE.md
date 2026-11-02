@AGENTS.md

# Catch Us on Main Street: project brief

The website for Catch Us on Main Street, an elevated family travel business in Prosper, Texas. Jennifer owns the business and every account. LeBron maintains the site with Claude Code as her tech support.

Roadmap and website requests: https://claude.ai/artifact/TYrDVciduh111T1T46m3L6

## Hard rules

- **Never change email DNS records** (MX, SPF, DKIM, DMARC) for catchusonmainstreet.com. When the website moves to the domain, change only the website records.
- **Nothing big goes live without her approval.** `main` auto-deploys to production on Netlify. New sections, pages, and redesigns go on a branch with a pull request, which produces a preview at `deploy-preview-<PR number>--catch-us-main-street.netlify.app`. Merge only after she approves. Small fixes (a typo, a price, a swapped photo) can go straight to `main`.
- **Only use photos she owns or has permission to use.** Never add stock or hotlinked images.
- Full-size originals stay out of git (`design-originals/` is ignored). Web copies in `public/` are resized to 1800px on the long edge, with GPS and location data stripped.

## Brand

- Colors (in `tailwind.config.ts`): teal `#0F4C5C`, espresso `#261E1B`, cream `#F5F2EF` (page background), goldenrod `#B8860B` (accents and thin rules).
- Fonts: Playfair Display (`font-display`) for headings, Geist for body text.
- Look: quiet luxury, modeled on thebookingclubtravel.com and maryyosttravel.com. Small uppercase eyebrows with wide letter spacing (`tracking-luxe`, `tracking-airy`), light-weight body text, lots of space, and short goldenrod divider lines.
- Voice: warm, calm, and family-first. Focus on what the family feels, not on luxury jargon. Never use hype or exclamation marks.

## Business facts

These live in `app/_components/site-info.ts`, so change them there and every page picks them up.

- Tiers: The Stay $200 · The Full Journey from $400 · The Milestone Journey from $650. Final fees are set after the discovery call.
- Client hours: Monday to Thursday, 9:30 AM to 2:30 PM CT. Evening calls Tuesday and Thursday, 7 to 8 PM CT.
- Inquiries go through Travefy (`INQUIRY_FORM_URL`). The current link returns 404 and needs the working one from her Travefy account.
- Specialties: credentialed Disney and Universal advisor, travel planning around food allergies and medical needs, multigenerational trips.

## Where things are

- Pages: `app/page.tsx` (Home), `app/services`, `app/about`, `app/start-here`. Shared pieces are in `app/_components/`.
- Forms: Netlify Forms, registered via the static `public/__forms.html` and posted with `fetch`. Form detection must be enabled in Netlify.
- Hosting: Netlify site `catch-us-main-street`. Code: GitHub `catch-us-on-main-street/catch-us-on-main-street`, in her organization.
- The repo is **public**, because Netlify's free and Personal plans can't deploy private organization repos. Never commit passwords, API keys, `.env` files, client details, or full-size photos. Keep secrets in Netlify environment variables.
- Domain: catchusonmainstreet.com is registered with Amazon and its DNS is on Route 53, both held by Travefy until the domain moves (roadmap Phase 1). Its email currently runs through Travefy.

## Before calling a change done

Run `npm run lint` and `npm run build`. Then check the changed pages at phone (390px), tablet (768px), and laptop (1440px) widths for overflow, broken images, and missing alt text.
