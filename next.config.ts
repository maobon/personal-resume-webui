import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["192.168.3.106"],
    // PostgreSQL access requires a running Node.js server in production.
    output: "standalone",
};

export default nextConfig;
