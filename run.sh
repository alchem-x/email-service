#!/usr/bin/env bash
cd "$(dirname "$0")" || exit 1

pnpm install
pnpm build
pnpm start
