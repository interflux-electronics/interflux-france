#!/bin/bash

set -eou pipefail

echo "----------"
echo "⛵️ deploying to server in Paris ..."
echo "----------"
scp bin/deploy-remote.sh paris:~/
echo "----------"
echo "✅ scp"
echo "----------"
ssh -t paris "~/deploy-remote.sh"
echo "----------"
echo "✅ deploy complete"
echo "----------"