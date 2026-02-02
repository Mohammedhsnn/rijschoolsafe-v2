/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
