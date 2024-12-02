# Use official Node.js image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port for the app
EXPOSE 5000

# Start the backend application
CMD ["node", "server.js"]
