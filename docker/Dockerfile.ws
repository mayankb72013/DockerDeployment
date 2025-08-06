FROM oven/bun:1 

ARG DATABASE_URL
WORKDIR /usr/src/app

COPY . .

RUN bun install
RUN bun run db:generate
RUN DATABASE_URL=${DATABASE_URL} bun run build

CMD ["bun","run","start:ws"]

EXPOSE 8081