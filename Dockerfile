# Use a specific node version for reproducibility
FROM node:20-alpine3.18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all source files
COPY . .

# Build the application
RUN npm run build

# Use a smaller image for the runtime environment
FROM node:20-alpine3.18

# Set working directory
WORKDIR /app

# Copy only the built files and node_modules from the build stage
COPY --from=build /app .

# Expose the application port
EXPOSE 4850

# Start the application
CMD ["npm", "start"]
