FROM node:22.15.0-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable

RUN pnpm i

COPY . .

RUN pnpm build

FROM nginx:1.28.0-alpine-slim AS proxy

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist/tournament/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]