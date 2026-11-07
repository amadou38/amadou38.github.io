# amadou38.github.io — personal academic website

Static site (plain HTML/CSS/JS, no build step). Open `index.html` in a browser to preview.

## Structure
- `index.html` — all content (edit text here)
- `assets/css/style.css` — design (colors are CSS variables at the top; light & dark themes)
- `assets/js/main.js` — publications & talks lists (edit the arrays at the top), theme toggle, scroll effects

- `assets/cv/Amadou_Diallo_CV.pdf` — **put your compiled CV here** (from `CV/resume.tex`, compiled with XeLaTeX)

## Publish on GitHub Pages
1. Create a public repo named exactly `amadou38.github.io`.
2. Push only the site files (not the 148 MB thesis PDF; GitHub refuses files over 100 MB):
   ```bash
   git init && git add index.html assets .nojekyll README.md
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/amadou38/amadou38.github.io.git
   git push -u origin main
   ```
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
4. The site is live at https://amadou38.github.io after a minute or two.

## Updating
- New paper or talk: add an entry to the `publications` or `talks` array at the top of `assets/js/main.js`.
