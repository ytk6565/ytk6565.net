# @ytk6565.net/ui

## Format

```bash
$ pnpm --filter @ytk6565.net/ui format
```

## Typecheck

```bash
$ pnpm --filter @ytk6565.net/ui typecheck
```

## Lint

```bash
$ pnpm --filter @ytk6565.net/ui lint
```

## Unit test

```bash
$ pnpm --filter @ytk6565.net/ui test -- run
```

## Storybook

```bash
# serve with hot reload at localhost:6006
$ pnpm --filter @ytk6565.net/ui storybook

# build for production
$ pnpm --filter @ytk6565.net/ui build-storybook

# serve for production
$ npx http-server packages/ui/storybook-static/
```

### Update Storybook to prerelease

```bash
$ npx sb upgrade --prerelease
```
