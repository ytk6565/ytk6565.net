bash ./shell-scripts/clean-cache.sh
bash ./shell-scripts/clean-distribution.sh

# install dependencies
pnpm i

# build
pnpm build