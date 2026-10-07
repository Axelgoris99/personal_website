#!/usr/bin/env bash
set -euo pipefail

VPS="ovh"
REMOTE_DIR="/home/debian/goris.live"

echo "==> Building..."
npm run build

echo "==> Syncing site..."
rsync -az --delete --progress dist/ "$VPS:$REMOTE_DIR/"

echo "==> Syncing Caddy config..."
# --inplace keeps the Caddyfile inode, so the container's single-file bind mount sees the update
changes=$(
  rsync -az --inplace --itemize-changes docker-compose.yml Caddyfile "$VPS:~/"
  rsync -az --itemize-changes caddy/ "$VPS:~/caddy/"
)

# Only recreates the container if docker-compose.yml changed
ssh "$VPS" "cd ~ && docker compose up -d"

if [ -n "$changes" ]; then
  echo "==> Reloading Caddy (no downtime)..."
  ssh "$VPS" "cd ~ && docker compose exec -T caddy caddy reload --config /etc/caddy/Caddyfile"
else
  echo "==> Caddy config unchanged"
fi

echo "==> Done. https://goris.live"
