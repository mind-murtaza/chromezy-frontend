FROM node:18-alpine

WORKDIR /app

# Install dependencies first (leverages Docker layer cache)
COPY package.json yarn.lock* ./
RUN yarn install --frozen-lockfile

# Copy application source
COPY . .

EXPOSE 3000
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Default: run dev server (hot reload). Override with `yarn build && yarn start` for prod.
CMD ["yarn", "dev"]
