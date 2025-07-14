# === STAGE 1: Build ===
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем все файлы
COPY . .

# Собираем проект как standalone Next.js приложение
RUN npm run build

# === STAGE 2: Runtime ===
FROM node:20-alpine AS runner

WORKDIR /app

# Копируем только собранный standalone сервер и public файлы
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Устанавливаем порт и запускаем
ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]