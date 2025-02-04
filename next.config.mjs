/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // images: {
  //   loader: "default",
  //   path: "/assets/",
  // },
};

export default nextConfig;
