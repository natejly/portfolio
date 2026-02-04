# Git LFS Setup for Portfolio Videos

## Summary
Your portfolio now uses Git LFS (Large File Storage) to manage video files efficiently. The videos are stored in LFS and fetched when needed, rather than being stored directly in the repository.

## What Was Done

### 1. Fetched LFS Files
- Ran `git lfs pull` to download the actual video files from LFS
- Videos are now properly available in `src/assets/`:
  - `GOLF.mp4` (22MB)
  - `TrackingCompilation.mp4` (165MB)

### 2. Updated Projects.jsx
- Changed from S3 URLs to local video imports
- Added imports:
  ```javascript
  import trackingVideo from '../assets/TrackingCompilation.mp4';
  import golfVideo from '../assets/GOLF.mp4';
  ```
- Updated project objects to use local videos instead of S3 URLs

### 3. Enhanced Vite Configuration
- Added build configuration to handle large video assets
- Increased chunk size warning limit to 200MB
- Configured asset file naming for better caching
- Videos will be placed in `assets/videos/` directory when built

## Git LFS Configuration

Your `.gitattributes` file already has:
```
*.mp4 filter=lfs diff=lfs merge=lfs -text
```

This ensures all `.mp4` files are automatically tracked by LFS.

## Benefits

1. **Faster Repository Operations**: Git operations are faster since large files aren't in the main repo
2. **Better Caching**: Local videos can be cached by the browser
3. **Offline Development**: Videos work without internet connection
4. **Cost Savings**: No S3 bandwidth costs for video delivery
5. **Version Control**: Videos are still version controlled through LFS

## Important Commands

### Fetch LFS files (after cloning or pulling)
```bash
git lfs pull
```

### Check LFS status
```bash
git lfs ls-files
```

### Check if files are LFS pointers or actual files
```bash
file src/assets/*.mp4
```
- If output shows "ASCII text", they're LFS pointers (need to fetch)
- If output shows "ISO Media, MP4", they're actual video files (ready to use)

## Deployment Considerations

### For Vercel/Netlify/Similar Platforms:
Most modern hosting platforms support Git LFS automatically. However:

1. **Verify LFS Support**: Check your hosting provider's documentation
2. **Build Time**: Large videos will increase build times
3. **Bundle Size**: The 165MB video is quite large - consider:
   - Compressing the video further
   - Using lazy loading (already implemented with `loading="lazy"`)
   - Using adaptive bitrate streaming for very large files

### Alternative: Hybrid Approach
If the 165MB file causes deployment issues, you can:
1. Keep smaller videos (like GOLF.mp4) local
2. Keep very large videos on S3/CDN
3. Mix and match based on file size

## Optimization Recommendations

### 1. Video Compression
Consider compressing `TrackingCompilation.mp4` (165MB is quite large):
```bash
# Using ffmpeg to compress while maintaining quality
ffmpeg -i TrackingCompilation.mp4 -vcodec h264 -crf 28 TrackingCompilation_compressed.mp4
```

### 2. Multiple Formats
Provide WebM fallback for better browser compatibility:
```bash
ffmpeg -i video.mp4 -c:v libvpx-vp9 -crf 30 video.webm
```

### 3. Poster Images
Add poster images to video tags for better UX:
```jsx
<video poster="/path/to/poster.jpg" ...>
```

## Troubleshooting

### Videos not loading after deployment
1. Check if LFS files were fetched during build
2. Verify hosting platform supports LFS
3. Check browser console for 404 errors
4. Ensure Vite is bundling videos correctly

### "ASCII text" when checking files
Run `git lfs pull` to fetch the actual video files

### Build fails due to file size
- Increase Node memory: `NODE_OPTIONS=--max-old-space-size=4096`
- Or move large files back to CDN/S3

## Current Status

✅ LFS files fetched successfully
✅ Projects.jsx updated to use local videos
✅ Vite configured for large assets
✅ Videos are properly tracked in LFS

You can now run your development server and the videos should load from local files instead of S3.
