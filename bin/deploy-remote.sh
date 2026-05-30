#!/bin/bash

set -eou pipefail

cd /var/www/interfluxfrance.com
sudo -u interflux bash -lc "git pull"

echo "----------"
echo "✅ git pull"
echo "----------"

sudo -u interflux bash -lc "npm install"

echo "----------"
echo "✅ nvm install"
echo "----------"

sudo -u interflux bash -lc "npm install"

echo "----------"
echo "✅ npm install"
echo "----------"

# Runs into memory issues
# sudo -u interflux bash -lc "npm run build"
sudo -u interflux bash -lc "NODE_OPTIONS=--max-old-space-size=4096 npm run build"

echo "----------"
echo "✅ npm run build"
echo "----------"

sudo systemctl daemon-reload
sudo systemctl restart interfluxfrance.com
sudo systemctl status interfluxfrance.com --no-pager

echo "----------"
echo "✅ systemctl restart interfluxfrance.com"
echo "----------"