bash ./scripts/clean-cache.sh
bash ./scripts/clean-distribution.sh

# install dependencies
pnpm i --frozen-lockfile

# build
pnpm build