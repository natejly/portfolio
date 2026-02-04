#!/bin/bash

# Script to verify Git LFS setup for portfolio videos

echo "🔍 Checking Git LFS Setup..."
echo ""

# Check if git-lfs is installed
if ! command -v git-lfs &> /dev/null; then
    echo "❌ Git LFS is not installed"
    echo "   Install with: brew install git-lfs (macOS) or apt-get install git-lfs (Linux)"
    exit 1
fi
echo "✅ Git LFS is installed"

# Check if LFS is initialized
if ! git lfs env &> /dev/null; then
    echo "❌ Git LFS is not initialized"
    echo "   Run: git lfs install"
    exit 1
fi
echo "✅ Git LFS is initialized"

# Check tracked files
echo ""
echo "📋 LFS Tracked Files:"
git lfs ls-files

# Check if video files are actual videos or pointers
echo ""
echo "🎥 Video File Status:"
for video in src/assets/*.mp4; do
    if [ -f "$video" ]; then
        filetype=$(file "$video" | cut -d: -f2)
        if [[ $filetype == *"ASCII text"* ]]; then
            echo "❌ $video - LFS pointer (not fetched)"
            echo "   Run: git lfs pull"
        elif [[ $filetype == *"ISO Media"* ]] || [[ $filetype == *"MP4"* ]]; then
            size=$(ls -lh "$video" | awk '{print $5}')
            echo "✅ $video - Actual video file ($size)"
        else
            echo "⚠️  $video - Unknown type: $filetype"
        fi
    fi
done

# Check .gitattributes
echo ""
echo "📝 .gitattributes Configuration:"
if grep -q "*.mp4 filter=lfs" .gitattributes; then
    echo "✅ MP4 files are configured for LFS"
    grep "*.mp4" .gitattributes
else
    echo "❌ MP4 files are not configured for LFS"
    echo "   Add to .gitattributes: *.mp4 filter=lfs diff=lfs merge=lfs -text"
fi

echo ""
echo "✨ Verification complete!"
