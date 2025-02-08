# Use official Node.js image as the base image
FROM node:18

# Set the working directory to /app inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container to install dependencies
COPY package.json package-lock.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 to allow external access (from the host machine to the container)
EXPOSE 3000

# Run the development server when the container starts
CMD ["npm", "run", "dev"]
