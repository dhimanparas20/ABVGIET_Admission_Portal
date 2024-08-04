# pull official base image
FROM python:3.11.4-slim-buster

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# install dependencies
COPY ./backend/requirements.txt /app/
RUN pip install --no-cache-dir --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt    

# copy project
COPY ./backend /app/

# Expose port
EXPOSE 5000

# specify the command to run
CMD ["gunicorn", "backend.wsgi", "0.0.0.0:5000"]