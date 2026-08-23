# Arulmurugan C — Developer Portfolio

Personal portfolio for Arulmurugan C, Java Backend Developer.

## Stack

- React
- Vite
- Lucide React
- CSS
- GitHub Pages

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## GitHub Pages

This project uses relative Vite paths (`base: "./"`) so it can be deployed from a GitHub Pages project repository.

Recommended repository name:

`portfolio`

After pushing the project:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main` and `/docs` only if you copy the built output there, or use a GitHub Actions workflow for Vite.
4. For the easiest deployment, add a GitHub Actions workflow that runs `npm ci`, `npm run build`, and deploys `dist/`.

## Resume

Place the supplied resume PDF at:

`public/resume.pdf`

The Download Resume button links to `/resume.pdf`.
