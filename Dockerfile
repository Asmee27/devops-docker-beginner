# Base image
FROM node:18

# App folder inside container
WORKDIR /app

# Copy files
COPY app.js .

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "app.js"]
