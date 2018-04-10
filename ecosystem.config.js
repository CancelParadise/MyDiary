module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'my-app',
      script    : 'npm',
      args      : 'run start:production',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {},
    staging: {
      user: 'root',
      host: '192.168.62.241',
      ref: 'origin/master',
      repo: 'https://github.com/CancelParadise/MyDiary.git',
      path: '/var/lib/jenkins/workspace/Test Job',
     // key: '/var/lib/jenkins/.ssh/id_rsa',
     // ssh_options: ['ForwardAgent=yes'],
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {}
  }
};