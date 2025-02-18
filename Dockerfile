# Use official Node.js image
FROM node:22 AS builder

WORKDIR /usr/app

# Copy package.json and lock file first
COPY package*.json ./

# Copy Prisma schema before installation
COPY prisma ./prisma

# Install dependencies
RUN npm ci

# Generate Prisma client
RUN npx prisma generate

# Copy the rest of the app
COPY . .

# Build the application
RUN npm run build

# -- Production image --
FROM node:22 AS runner

WORKDIR /usr/app

# Copy only required files from the builder stage
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/package.json ./package.json

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
