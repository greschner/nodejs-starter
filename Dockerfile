# syntax=docker/dockerfile:1

FROM node:26-trixie-slim AS base

ENV NODE_ENV=production
WORKDIR /app

FROM base AS deps

COPY package.json package-lock.json ./
# mkdir: npm ci creates no node_modules when there are no production dependencies
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev --ignore-scripts && mkdir -p node_modules

FROM base AS runtime

# Files stay root-owned so the app user cannot modify its own code
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
COPY src ./src

USER node

CMD ["node", "src/index.js"]
