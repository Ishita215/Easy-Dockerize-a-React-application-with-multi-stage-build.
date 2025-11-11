# ---------- STAGE 1: Build the React app ----------
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies: copy package files first to leverage Docker caching
COPY package.json package-lock.json* ./

# Use npm ci if package-lock.json is present, otherwise npm install
RUN if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi

# Copy source and build
COPY public ./public
COPY src ./src

RUN npm run build

# ---------- STAGE 2: Serve with nginx ----------
FROM nginx:stable-alpine

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config (optional for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
