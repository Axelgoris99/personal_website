#!/usr/bin/env bash
# Builds the public resume PDFs (phone number hidden) from the Typst repo,
# one per skin in $RESUME/skins. Classic keeps the original file name.
set -euo pipefail
cd "$(dirname "$0")/.."

RESUME="${RESUME:-../resume}"

for skin in "$RESUME"/skins/*.typ; do
	id=$(basename "$skin" .typ)
	# A skin may need assets generated first (e.g. comic's name plates).
	if [ -x "$RESUME/skins/$id/build.sh" ]; then "$RESUME/skins/$id/build.sh"; fi
	out="public/Axel_Goris_Resume-$id.pdf"
	[ "$id" = classic ] && out="public/Axel_Goris_Resume.pdf"
	typst compile --root "$RESUME" --font-path "$RESUME/fonts" \
		--input public=true --input skin="$id" \
		"$RESUME/resume/Axel_Goris_Resume.typ" "$out"
	echo "==> $out"
done
