module.exports = {
  apps: [
    {
      name: 'Thinkin Nuxt',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      error_file: './pm2_error/'
    }
  ]
}
