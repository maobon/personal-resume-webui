import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ["192.168.3.106"],
    // Generate a fully static production bundle in `out/`.
    output: "export",
};

export default nextConfig;
