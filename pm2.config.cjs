module.exports = {
    apps: [
        {
            name: 'interflux-france',
            script: './build/index.js',
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,

            // prevent memory leaks from taking down server
            max_memory_restart: '600M',

            env: {
                NODE_ENV: 'production',
                PORT: 3000,
            }

            // Logging
            // error_file: './logs/app-err.log',
            // out_file: './logs/app-out.log',
            // merge_logs: true,               // useful in cluster mode
            // time: true,                     // prefix logs with timestamps
            // log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

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