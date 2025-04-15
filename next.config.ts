import {withSentryConfig} from '@sentry/nextjs';
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
ignoreBuildErrors: true,
  },
eslint:{
    ignoreDuringBuilds: true,
},
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns:[{
      protocol: 'https',
      hostname: '*',
    }]
  },
  experimental: {
      ppr: 'incremental',
      after : true
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  }
};

export default withSentryConfig(nextConfig, {

org: "brahmos",
project: "nextjs-startupdirectory",

silent: !process.env.CI,

widenClientFileUpload: true,

reactComponentAnnotation: {
enabled: true,
},

tunnelRoute: "/monitoring",

hideSourceMaps: true,

disableLogger: true,

automaticVercelMonitors: true,
});