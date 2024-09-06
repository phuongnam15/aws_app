/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staticg.sportskeeda.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
