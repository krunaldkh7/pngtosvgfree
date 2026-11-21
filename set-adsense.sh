#!/bin/bash
# Usage: ./set-adsense.sh ca-pub-1234567890123456
# Adds your Google AdSense code to every page (HTML + React versions) and fills in ads.txt.
set -euo pipefail
cd "$(dirname "$0")"

ID="${1:-}"
if [[ ! "$ID" =~ ^ca-pub-[0-9]{16}$ ]]; then
  echo "Usage: ./set-adsense.sh ca-pub-1234567890123456  (16 digits, from AdSense → Account → Account information)"
  exit 1
fi
PUB="${ID#ca-}"

# 1. HTML pages: replace the commented placeholder (or a previous ID) with the real snippet.
for f in *.html; do
  perl -0pi -e '
    s#<!-- Google AdSense: after approval.*?-->#<meta name="google-adsense-account" content="'"$ID"'">\n<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='"$ID"'" crossorigin="anonymous"></script>#s;
    s#ca-pub-\d{16}#'"$ID"'#g;
  ' "$f"
done

# 2. ads.txt (both versions)
for f in ads.txt react-app/public/ads.txt; do
  echo "google.com, $PUB, DIRECT, f08c47fec0942fa0" > "$f"
done

# 3. React version config
perl -pi -e 's#export const ADSENSE_CLIENT = "[^"]*";#export const ADSENSE_CLIENT = "'"$ID"'";#' react-app/lib/site.js

echo "AdSense ID $ID added. Rebuild the React version with: cd react-app && npm run build"
