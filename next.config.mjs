/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 82],
    // YouTube poster frames. The player itself is only loaded once a visitor
    // presses play, so until then a video costs one image, not YouTube's
    // whole iframe bundle and its cookies.
    remotePatterns: [new URL("https://i.ytimg.com/vi/**")],
  },
};

export default nextConfig;
