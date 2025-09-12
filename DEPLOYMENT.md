# Deployment Guide

## 🚀 Overview

This guide covers deployment options for the Matteo Mock Startup Website. The project is configured as a static Next.js export, making it suitable for various hosting platforms.

## 📋 Table of Contents

- [GitHub Pages (Automatic)](#github-pages-automatic)
- [Manual Deployment](#manual-deployment)
- [Other Hosting Platforms](#other-hosting-platforms)
- [Environment Configuration](#environment-configuration)
- [Troubleshooting](#troubleshooting)

## 🔄 GitHub Pages (Automatic)

### Automatic Deployment

The repository is configured for automatic deployment to GitHub Pages:

- **Workflow**: `.github/workflows/static.yml`
- **Triggers**: 
  - Push to `main` branch
  - Push to `feature/**` branches  
  - Manual trigger via GitHub Actions
- **Build Process**: Next.js static export
- **Output**: `out/` directory
- **Live URL**: https://mbianchidev.github.io/mock-startup-website/

### Workflow Configuration

The GitHub Actions workflow performs these steps:

1. **Checkout** - Get the latest code
2. **Setup Node.js** - Install Node.js 20 with npm caching
3. **Install Dependencies** - Run `npm ci` for clean install
4. **Build and Export** - Generate static files with proper base path
5. **Deploy** - Upload to GitHub Pages

### Environment Variables

During GitHub Pages deployment:
- `NEXT_BASE_PATH` is set to `/mock-startup-website` for proper asset routing
- Base path ensures assets work correctly under the repository subpath

## 🛠️ Manual Deployment

### Local Build Process

To build the project locally:

```bash
# Clean install dependencies
npm ci

# Build the static export
npm run build

# Output will be in the 'out/' directory
ls out/
```

### Testing Local Build

Before deploying, test the build locally:

```bash
# Serve the static files
npx serve out

# Or use Python's built-in server
cd out && python -m http.server 8000

# Or use any static file server
```

### Deployment Steps

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `out/` directory** to your hosting provider

3. **Configure your hosting** to serve static files

## 🌐 Other Hosting Platforms

### Vercel

Vercel provides excellent Next.js support:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts for configuration
```

**Configuration**: Vercel automatically detects Next.js and handles the build.

### Netlify

Deploy to Netlify with these settings:

- **Build Command**: `npm run build`
- **Publish Directory**: `out`
- **Node Version**: 18 or higher

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"
```

### AWS S3 + CloudFront

For AWS deployment:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to S3**:
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront** for CDN and custom domain

### Firebase Hosting

Deploy to Firebase:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

**Firebase Configuration** (`firebase.json`):
```json
{
  "hosting": {
    "public": "out",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "trailingSlash": true
  }
}
```

## ⚙️ Environment Configuration

### Base Path Configuration

The application supports deployment under a subpath:

```javascript
// next.config.js
const basePath = process.env.NEXT_BASE_PATH || ''

const nextConfig = {
  ...(basePath && { basePath, assetPrefix: basePath }),
  // ... other config
}
```

### Static Export Settings

Key Next.js configuration for static deployment:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### Environment Variables

Set these environment variables for different deployments:

- `NEXT_BASE_PATH`: Subpath for hosting (e.g., `/mock-startup-website`)
- `NODE_ENV`: Set to `production` for production builds

## 🐛 Troubleshooting

### Common Deployment Issues

#### Assets Not Loading

**Problem**: CSS, JS, or images return 404 errors

**Solutions**:
- Check `NEXT_BASE_PATH` configuration
- Verify `assetPrefix` in `next.config.js`
- Ensure trailing slashes are configured correctly

#### Build Failures

**Problem**: Build fails during deployment

**Solutions**:
```bash
# Check for TypeScript errors
npm run lint

# Verify dependencies
npm ci

# Check Node.js version (requires 18+)
node --version
```

#### Routing Issues

**Problem**: Direct URLs return 404 (except homepage)

**Solutions**:
- Configure hosting provider for SPA routing
- Add `trailingSlash: true` to Next.js config
- Check hosting provider's documentation for static site routing

### GitHub Pages Specific Issues

#### Base Path Problems

If assets don't load on GitHub Pages:

1. Verify the workflow sets `NEXT_BASE_PATH` correctly
2. Check that `next.config.js` uses the base path
3. Ensure the repository name matches the base path

#### Deployment Failures

If GitHub Actions fail:

1. Check the workflow logs in the Actions tab
2. Verify Node.js version compatibility
3. Ensure all dependencies are in `package.json`

### Performance Optimization

#### Build Size

Reduce build size:
- Remove unused dependencies
- Optimize images before adding to public/
- Use dynamic imports for large components

#### Caching

Configure proper caching headers:
- Static assets: Long-term caching
- HTML files: Short-term caching
- API responses: Appropriate cache control

## 📊 Deployment Checklist

Before deploying to production:

- [ ] Run `npm run lint` - No TypeScript or ESLint errors
- [ ] Run `npm run build` - Build succeeds locally
- [ ] Test `npx serve out` - Static files work correctly
- [ ] Check responsive design on different devices
- [ ] Verify all links work correctly
- [ ] Test external integrations (Font Awesome, etc.)
- [ ] Confirm environment variables are set correctly
- [ ] Review build output size and performance

## 📈 Monitoring

### Post-Deployment Checks

After deployment:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images and assets display properly
- [ ] Mobile responsiveness works
- [ ] External links open correctly
- [ ] Console shows no critical errors

### Analytics (Optional)

Consider adding:
- Google Analytics for usage tracking
- GitHub repository insights for development metrics
- Performance monitoring tools

---

**Need Help?** Check the [SUPPORT.md](SUPPORT.md) file or create an issue on GitHub for deployment-specific questions.