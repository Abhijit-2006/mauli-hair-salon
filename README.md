# Mauli Hair Salon – Website

React + Vite + Tailwind CSS. Black, gold and white theme, WhatsApp booking.

## Run locally
1. Install Node.js 18+ from https://nodejs.org
2. In this folder run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:5173

## Edit content
Everything (phone, WhatsApp number, prices, hours, address, gallery) is in `src/data/site.js`.
Photos live in `public/images/`.

## Build
```
npm run build
npm run preview
```

## Deploy on Vercel
**Option A – GitHub (recommended)**
1. Create a GitHub repo and push this folder (`git init`, `git add .`, `git commit -m "init"`, `git push`).
2. Go to https://vercel.com, sign in, click **Add New → Project**, import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output `dist`. Click **Deploy**.
4. Your live URL appears as `https://your-project.vercel.app`.

**Option B – CLI**
```
npm i -g vercel
vercel        # follow prompts
vercel --prod # get the public URL
```
