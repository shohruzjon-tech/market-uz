module.exports = {
  trailingSlash: false,
  useFileSystemPublicRoutes: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    theme: "DEFAULT",
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
    loader: 'akamai',
    path: '',
  },
};
