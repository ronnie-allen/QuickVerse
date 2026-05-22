#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT="$PROJECT_DIR/bible-extension.zip"

cd "$PROJECT_DIR"

if [ ! -f "data/tovbsi.json" ]; then
  echo "ERROR: data/tovbsi.json not found. Run fetch-tovbsi.js first."
  exit 1
fi

if [ ! -f "data/niv.json" ] || [ ! -f "data/amp.json" ]; then
  echo "WARNING: data/niv.json or data/amp.json missing. Run fetch-eng.js first."
  echo "Continuing with only available data..."
fi

rm -f "$OUTPUT"

zip -r "$OUTPUT" \
  manifest.json \
  popup/ \
  data/ \
  icons/ \
  -x "*.DS_Store" "*.gitkeep"

echo "Created: $OUTPUT"
