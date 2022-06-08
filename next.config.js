/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nextjs-prixite-pages",
  assetPrefix: "/nextjs-prixite-pages",
}

module.exports = nextConfig
