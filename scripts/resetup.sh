bash ./scripts/clean-cache.sh
bash ./scripts/clean-distribution.sh

# install dependencies
pnpm i

# build
pnpm build