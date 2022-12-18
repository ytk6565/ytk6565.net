# node_modules
rm -rf node_modules/.cache/
rm -rf apps/**/node_modules/.cache/
rm -rf packages/**/node_modules/.cache/

# clean pnpm cache
pnpm store prune
