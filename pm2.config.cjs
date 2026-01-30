module.exports = {
    apps: [
        {
            name: 'IFFR',
            script: './build/index.js',
            interpreter: '/home/interflux/.nvm/versions/node/v24.13.0/bin/node',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
            },

            // performance
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '600M',

            // logs
            error_file: '/var/log/prototype.interflux.fr/app-err.log',
            out_file: '/var/log/prototype.interflux.fr/app-out.log',
            merge_logs: true,
            time: true,                     // prefix logs with timestamps
            log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

            // More control
            // cron_restart: '0 5 * * *',      // restart every day at 5am (cron syntax)
            // restart_delay: 4000,            // wait 4s before restarting after crash
            // kill_timeout: 3000,             // give app 3s to gracefully shut down

            // HTTP → HTTPS proxy / health checks
            // listen_timeout: 8000,
            // wait_ready: true,               // app must call process.send('ready')
        }
    ]
};