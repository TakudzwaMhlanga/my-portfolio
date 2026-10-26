# Takudzwa Mhlanga — CasperCode Studio portfolio

A responsive, single-page portfolio for **Takudzwa Mhlanga** (Casper Hlangester) and his founder-led studio, **CasperCode Studio**. Built with React, TypeScript and Vite. The site is static: there is no server, database, API key, payment flow or contact form.

## Run locally

Install [Node.js](https://nodejs.org/) 22 or newer. In this folder, run:

```bash
npm ci
npm run dev
```

Open the local address printed by Vite. Before publishing, check the production build:

```bash
npm run build
npm run preview
```

Vite writes the deployable site to `dist/`. `npm ci` uses the committed `package-lock.json` and is also used by GitHub Actions.

## Edit your content

Most information lives in **`src/data/site.ts`**:

- `profile` contains the public email, WhatsApp, call number, GitHub, and LinkedIn links. Check these before publishing. The contact area provides `mailto:`, WhatsApp, and `tel:` links.
- `profile.portraitUrl` is empty, so the About section shows designed initials. Add an optimized portrait such as `public/portrait.webp`, then set the value to `'/portrait.webp'`. Add meaningful alt text in `src/App.tsx` if the image needs more detail.
- Edit `projects` to update status, case studies, technologies, features and optional `demoUrl`/`sourceUrl`. Only add links that exist. The AI loan eligibility project remains a concept; KCI Microfinance and Warupinduka are listed as built based on the supplied dashboard screenshots.
- The original Warupinduka and KCI screenshots and both freeCodeCamp certificate images are in `public/images/`. Their `imageUrl` values in `src/data/site.ts` point to these local assets. The certificate cards also link to their verification pages.
- `skillAreas` are explicitly labelled **areas of interest**, since specific skills have not yet been confirmed. Review the list and change the wording and content to reflect your real skills.
- `certifications` contains the two freeCodeCamp certificate links and issue dates shown in the Skills section.
- `studioFocus` contains intended offerings, not claims about completed client work.

Layout and interaction are in `src/App.tsx`; styling is in `src/styles.css`. The page title and sharing description are in `index.html`. The favicon is `public/favicon.svg`. There is no stock photography or invented portrait. Google Fonts may be fetched when available; system font fallbacks keep the site readable offline.

## GitHub repository and publishing

The repository for this version is [`TakudzwaMhlanga/my-portfolio`](https://github.com/TakudzwaMhlanga/my-portfolio). To set up a fresh local copy, clone it and install dependencies:

```bash
git clone https://github.com/TakudzwaMhlanga/my-portfolio.git
cd my-portfolio
npm ci
```

1. On GitHub, open the repository and select **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Open the **Actions** tab. The “Deploy to GitHub Pages” workflow builds on every push to `main`, and you can also run it with **Run workflow**. Wait for the deploy job to finish successfully.
3. Your site will be at `https://takudzwamhlanga.github.io/my-portfolio/`. GitHub also shows the live URL under **Settings → Pages** and in the deployment result.

To update the live site, edit the files, run `npm run build`, then run:

```bash
git add .
git commit -m "Update portfolio"
git push
```

The deployment workflow is `.github/workflows/deploy.yml`. It checks out the repository, installs exact dependencies with `npm ci`, builds, uploads `dist/` and deploys it to GitHub Pages.

## Hosting path and 404 page

`vite.config.ts` sets `base: '/my-portfolio/'`, matching the repository name. This prefixes built JavaScript, CSS and favicon paths so they load from the GitHub Pages project URL. The single-page sections use `#` links, so refreshing a section never requires server-side routing.

If you rename the repository, change `base` to `'/NEW-REPOSITORY-NAME/'`. Also change the back-to-portfolio link in `public/404.html` to that path. For a `<GITHUB_USERNAME>.github.io` repository or a custom domain served from the root, use `base: '/'` and set the 404 link to `/`. Rebuild and push after changing the path.

The custom `404.html` gives visitors a way back if they reach a missing URL. It is copied into `dist/` during the Vite build.

## Details still needed from you

- A portrait, if you want one.
- Confirmation of your actual skills and preferred technologies.
- Any further academic details you want displayed, such as institution and degree dates.

No client names, testimonials, performance statistics, qualifications or years of experience were invented for this site.
