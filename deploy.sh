#!/usr/bin/env bash
set -euo pipefail

VPS="ovh"
REMOTE_DIR="/home/debian/goris.live"

echo "==> Building..."
npm run build

echo "==> Syncing site..."
rsync -az --delete --progress dist/ "$VPS:$REMOTE_DIR/"

echo "==> Syncing Caddy config..."
rsync -az docker-compose.yml Caddyfile "$VPS:~/"

echo "==> Restarting Caddy..."
ssh "$VPS" "cd ~ && docker compose up -d --force-recreate"

echo "==> Done. https://goris.live"
