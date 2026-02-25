# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Aceita as variáveis de ambiente como ARG
# Usa /api como caminho relativo - o Nginx faz o proxy
ARG VITE_API_KEY=""
ARG VITE_API_URL="/api"

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build application com as variáveis de ambiente disponíveis
RUN VITE_API_KEY=$VITE_API_KEY VITE_API_URL=$VITE_API_URL npm run build

# Runtime stage
FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:80/index.html || exit 1

# Expose port
EXPOSE 80

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
