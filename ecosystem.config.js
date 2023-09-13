module.exports = {
  apps: [
    {
      name: 'goat-replication-be',
      script: 'dist/main.js',
      autorestart: true,
      instances: '1',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'dev',
      },
      env_production: {
        NODE_ENV: 'prod',
      },
    },
  ],
};
