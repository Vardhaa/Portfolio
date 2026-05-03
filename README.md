# Vishnu Vardhan — Portfolio

A Vite + React + Tailwind portfolio, ready to deploy on Vercel.

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Step 1 — Create a GitHub Repo
1. Go to https://github.com/new
2. Name it `portfolio` (or anything you like), set to **Public**
3. Click **Create repository**

### Step 2 — Upload files to GitHub
Option A — GitHub web UI (easiest, no git needed):
1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL the contents of this folder (not the folder itself)
3. Commit changes

Option B — Git CLI:
```bash
cd path/to/this/folder
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com → **Add New Project**
2. Import your GitHub repo
3. Use these **exact** build settings:

| Setting          | Value           |
|------------------|-----------------|
| Root Directory   | `.`             |
| Build Command    | `pnpm run build`|
| Output Directory | `dist/public`   |
| Install Command  | `pnpm install`  |

4. Click **Deploy** — live in ~60 seconds ✅

---

## 📬 Connect Formspree (Contact Form)

1. Go to https://formspree.io → sign up free
2. Click **New Form** → give it a name → copy the **Form ID** (looks like `xyzabcde`)
3. Open `src/pages/Home.tsx`
4. Find this line near the top of `ContactForm`:
   ```ts
   const FORMSPREE_ID = "YOUR_FORM_ID";
   ```
5. Replace `YOUR_FORM_ID` with your actual ID, e.g. `"xyzabcde"`
6. Push to GitHub → Vercel auto-redeploys → form is live!

---

## 🛠 Local Development

```bash
pnpm install
pnpm run dev
```

Open http://localhost:3000
