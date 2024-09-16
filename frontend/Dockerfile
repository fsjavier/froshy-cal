# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /frontend

COPY --from=builder /frontend/.next ./.next
COPY --from=builder /frontend/package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "start"]