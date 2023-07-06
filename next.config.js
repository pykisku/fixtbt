/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  env: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    SQUARE_ACCESS_TOKEN: process.env.SQUARE_ACCESS_TOKEN,
    SQUARE_LOCATION_ID: process.env.SQUARE_LOCATION_ID,
  },
}

module.exports = nextConfig