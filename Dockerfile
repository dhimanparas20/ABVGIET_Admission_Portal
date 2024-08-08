# Use an official Docker image that has Docker Compose installed
FROM docker:latest

# Install Docker Compose
RUN apk add --no-cache py3-pip 

# Set the working directory
WORKDIR /app

# Copy the Docker Compose file into the container
COPY docker-compose.yml /app/

# Copy the backend and frontend directories
# COPY backend /app/backend/
# COPY frontend /app/frontend/

# Make Docker Compose the entry point
ENTRYPOINT ["docker-compose"]

# Run Docker Compose up command
CMD ["up"]
