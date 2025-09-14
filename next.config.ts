/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
    reactRemoveProperties: {
      properties: ['^data-cy', '^data-test', '^data-testid'],
    },
  },
};

module.exports = nextConfig;
