#!/usr/bin/env bash
set -euo pipefail

VPS="ovh"
REMOTE_DIR="/home/debian/goris.live"

echo "Building..."
npm run build

echo "Deploying to $VPS:$REMOTE_DIR..."
rsync -az --delete --progress dist/ "$VPS:$REMOTE_DIR/"

echo "Done. https://goris.live"
