/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
           config.resolve.alias.canvas = false;
        
           return config;
    },
    rewrites: async () => {
      return [
        {
          source: "/ADS",
          destination: "/ADS/index.html",
        }
      ]
  }

  }

module.exports = nextConfig
