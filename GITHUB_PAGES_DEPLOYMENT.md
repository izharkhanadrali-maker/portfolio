# GitHub Pages Deployment Troubleshooting

## Issue: Blank Page on GitHub Pages

Your portfolio shows a blank page when deployed to GitHub Pages. Here are the solutions:

### Root Causes:
1. GitHub Pages settings not configured correctly
2. 404.html SPA redirect not working
3. Base path not matching repository name
4. Asset paths not loading correctly

### Solutions:

#### 1. Verify GitHub Pages Settings
- Go to your repository settings: https://github.com/izharkhanadrali-maker/portfolio/settings/pages
- Source should be set to "Deploy from a branch"
- Select branch: `main` (or `master`)
- Select folder: `/root` (for root of the branch)

#### 2. Verify Configuration Files Are Correct

**vite.config.js** - Must have correct base path:
```javascript
base: '/portfolio/',
```

**main.jsx** - Must have correct BrowserRouter basename:
```javascript
<BrowserRouter basename="/portfolio/">
  <App />
</BrowserRouter>
```

**public/404.html** - Must exist and be in dist folder after build

#### 3. Ensure Build Completes Successfully
```bash
npm run build
```
- Check that `dist/404.html` exists
- Check that `dist/index.html` exists
- Check that `dist/assets/` contains CSS and JS files

#### 4. Verify Repository Branch
- Deployment must be from the main branch that contains your code
- GitHub Pages takes 1-2 minutes to deploy after push
- Check the "Actions" tab to see deployment status

#### 5. Clear Browser Cache
- Hard refresh (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac)
- Or clear GitHub Pages cache

### Deployment Steps:

```bash
# 1. Build the project
npm run build

# 2. Commit changes
git add .
git commit -m "Update portfolio"

# 3. Push to GitHub
git push origin main
```

After pushing, GitHub Actions will automatically build and deploy. Check the Actions tab for status.

### If Still Showing Blank Page:

1. Open Browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab to see if files are loading (200 status)
4. Look for 404 errors on assets

### Quick Debug Steps:

```bash
# Verify dist folder has all files
ls -la dist/
ls -la dist/assets/

# Test locally before pushing
npm run preview
# Visit http://localhost:4173/portfolio/
```

### Common Issues:

**Issue**: CSS/JS files showing 404
- **Solution**: Check `vite.config.js` has `base: '/portfolio/'`

**Issue**: Navigation not working
- **Solution**: Check `main.jsx` has `<BrowserRouter basename="/portfolio/">`

**Issue**: Still blank after 5 minutes
- **Solution**: Wait 2 minutes for GitHub Pages to deploy, then hard refresh browser (Ctrl+Shift+R)

