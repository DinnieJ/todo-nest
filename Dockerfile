FROM node:20.15 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:20.15-alpine as runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
RUN chown nestjs:nodejs /app
RUN chmod 777 /app

USER root

CMD ["npm", "run", "start:dev"]
