# Etapa de build
FROM node:20-alpine AS builder
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY COPY package.json ./


RUN npm install

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de runtime con Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiar archivos compilados de la etapa anterior
COPY --from=builder /app/dist ./
COPY public/robots.txt ./robots.txt
COPY public/favicon.ico ./favicon.ico

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
