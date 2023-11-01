FROM node:21-alpine

ENV PNPM_HOME=/usr/local/bin

WORKDIR /app

RUN corepack enable pnpm && corepack prepare pnpm@latest --activate

COPY pnpm-lock.yaml pnpm-workspace.yaml .

RUN pnpm fetch

COPY package.json .

COPY . .

RUN pnpm install --offline

RUN pnpm build