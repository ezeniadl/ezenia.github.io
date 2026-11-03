# Ezenia's site: how to edit and publish

## What's in this folder
- `content.js`: **all your text, links, images and videos.** This is the only file you normally edit.
- `index.html`: the main site (home, working on, projects, experience, digest, podcast, résumé, about, off the clock).
- `project.html`: the template every project page uses. Don't edit it.
- `style.css` and `site.js`: look and behavior. Leave alone unless you want design changes.
- `images/` and `audio/`: put your photos and podcast files here.

## Put it online for free (GitHub Pages), about 10 minutes
1. Create a free account at github.com.
2. Click **New repository**. Name it `yourusername.github.io` (replace with your GitHub username). Set it to **Public**. Create it.
3. On the repository page click **Add file → Upload files**. Drag in everything from this folder (including the `images` and `audio` folders). Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. After a minute or two your site is live at `https://yourusername.github.io`.

## Everyday updates (no Claude needed)
- **Change text:** open `content.js` on GitHub, click the pencil icon, edit, click **Commit changes**. The site updates in 1–2 minutes.
- **Add a photo:** open the `images` folder, **Add file → Upload files**, then reference it in `content.js` as `"images/yourfile.jpg"`. Compress photos to under about 500 KB first.
- **Add a video:** upload it to YouTube or Vimeo (unlisted is fine) and paste the link into the `media` list of a project or an "off the clock" block. Don't upload large video files to GitHub (100 MB limit, and it slows the site).
- **Add a project:** in `content.js`, copy one project block under `projects`, paste it below, and give it a new `slug` (lowercase with dashes, e.g. `"smart-sensor"`). It gets its own page automatically.
- **Add podcast audio:** upload the mp3 to `audio/`, then set `src: "audio/ep1.mp3"` for that episode.
- **Add your résumé:** upload the PDF to the main folder and set `resumePdf: "your-file.pdf"`.

## Good to know
- The repository is public, so don't put anything private in it.
- A custom domain (like ezeniadl.com) costs about $10–15 a year and is optional. GitHub Pages supports one under Settings → Pages.
- Mistakes are easy to undo: GitHub keeps every version, and you can restore any earlier one.
- If a page looks broken after an edit, the usual cause is a missing comma or quote in `content.js`.
