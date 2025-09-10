# Video Setup Instructions

## Video Background Setup

The website is configured to use video backgrounds in the Hero and Estate sections. Currently, it uses a placeholder video URL. To use your custom video:

### Option 1: Host Video Externally (Recommended)
1. Upload your video (`Auro 11.30 Full Vdi.mp4`) to a cloud storage service like:
   - Google Drive (make sure it's publicly accessible)
   - Cloudinary
   - Vimeo
   - YouTube
   - AWS S3

2. Update the video URLs in these files:
   - `src/components/Hero.jsx` (line with `heroVideo`)
   - `src/pages/Estate.jsx` (VideoBackground src prop)

### Option 2: Compress and Use Local Video
1. Compress your video to under 100MB using tools like:
   - HandBrake
   - FFmpeg: `ffmpeg -i "Auro 11.30 Full Vdi.mp4" -vcodec h264 -acodec mp2 -crf 28 hero-video.mp4`
   
2. Place the compressed video in the `public/` folder
3. Update the video URLs to use `/hero-video.mp4`

### Option 3: Use Git LFS (Advanced)
1. Install Git LFS: `git lfs install`
2. Track video files: `git lfs track "*.mp4"`
3. Add and commit your video file

### Current Configuration
The website currently falls back to high-quality images when video loading fails, ensuring a seamless user experience.

### Video Specifications
- Format: MP4 (H.264)
- Recommended size: Under 50MB for web
- Resolution: 1920x1080 or lower
- Duration: 30-60 seconds for loop

## Notes
- The video will autoplay, be muted, and loop continuously
- On mobile devices, the video may not autoplay due to browser restrictions
- The fallback image system ensures the site works even if video fails to load
