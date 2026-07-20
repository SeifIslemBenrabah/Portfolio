import path from 'path';
import type { NextConfig } from 'next';

// Overridable per-deployment so the same source can be built for repos with
// different names (e.g. GitHub Pages project sites, where the base path must
// match the repo name exactly). Defaults to the original repo's path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/Portfolio';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
