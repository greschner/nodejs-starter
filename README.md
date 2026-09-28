# nodejs-starter

A clean, ready-to-use Node.js starter template for building and shipping new projects quickly.

## Requirements

- Node.js version from [`.nvmrc`](.nvmrc) (`nvm use` / `fnm use`)
- Docker with Compose v2.24+ (optional, for containers)

## Getting started

```sh
cp .env.example .env
npm ci
npm run dev
```

## Scripts

| Script                 | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `npm start`            | Run the app                                            |
| `npm run dev`          | Run with watch mode, loading `.env` if present         |
| `npm test`             | Run tests with the built-in `node:test` runner         |
| `npm run lint`         | Lint with ESLint (warnings fail)                       |
| `npm run lint:fix`     | Lint and auto-fix                                      |
| `npm run format`       | Format with Prettier                                   |
| `npm run format:check` | Check formatting                                       |
| `npm run check`        | Lint, format check and tests — the same checks CI runs |
| `npm run docker:push`  | Build a multi-arch image and push it to `$REGISTRY`    |

## Configuration

Environment variables are read and validated in [`src/config.js`](src/config.js). Document every variable in [`.env.example`](.env.example). `.env` is for local development only; it is ignored by git and never copied into the image.

| Variable    | Default | Description                             |
| ----------- | ------- | --------------------------------------- |
| `LOG_LEVEL` | `info`  | One of `debug`, `info`, `warn`, `error` |

## Docker

```sh
docker compose up -d --build   # build and start
docker compose logs -f         # follow logs
docker compose down            # stop and remove
```

Publish a versioned multi-arch image (tags `<version>` and `latest`):

```sh
REGISTRY=registry.example.com npm run docker:push
```

## Using this template

1. Rename the project in `package.json` (`name`, `description`, `author`).
2. Update the copyright holder in [`LICENSE`](LICENSE).
3. Replace the placeholder in [`src/index.js`](src/index.js) with your application and close its resources in `shutdown()`.
