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
      host: ['192.168.62.241'],
      ref: 'origin/master',
      repo: 'git@github.com:CancelParadise/MyDiary.git',
      path: '/var/lib/jenkins/workspace/MyDiary',
      key: '~/.ssh/id_rsa',
      ssh_options: ['ForwardAgent=yes'],
      'pre-deploy': 'npm install'
      'post-deploy': 'chmod -x ecosystem.config.js && pm2 startOrRestart ecosystem.config.js --env production'
    },
    dev : {}
  }
};