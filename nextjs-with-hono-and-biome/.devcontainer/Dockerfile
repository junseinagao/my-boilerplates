FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

RUN corepack enable pnpm

# Install Dependencies for playwright
RUN apt-get update
RUN sudo pnpm dlx playwright install-deps
RUN sudo pnpm dlx playwright install
