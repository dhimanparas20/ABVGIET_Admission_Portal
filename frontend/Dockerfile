# Use official Node.js image as base
FROM node:22.2.0

# Set work directory
WORKDIR /app/frontend/

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . /app/frontend/

# Build the application
RUN npm run build

# Expose port (Next.js default port is 3000)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
