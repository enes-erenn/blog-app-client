/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: "http://localhost:8800/api",
    NEXT_PUBLIC_JWT_SEC: "auth_jwt_key",
  },
};

module.exports = nextConfig;
