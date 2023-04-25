module.exports = {
  apps: [
    {
      name: 'Thinkin Nuxt',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'PORT=3005 ./.output/server/index.mjs',
      env: {
        NODE_PORT:"3005",
        PORT:"3005",
    },
      error_file: './pm2_error/'
    }
  ]
}
