FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Install wait-for-it
RUN apt-get update && apt-get install -y wait-for-it

# Copy initialization scripts for the database
COPY /db/init-db.sh /docker-entrypoint-initdb.d/
COPY /db/schema.sql /docker-entrypoint-initdb.d/

# Make the init-db.sh script executable
RUN chmod +x /docker-entrypoint-initdb.d/init-db.sh

# Copy the rest of the application files into the container
COPY . .

# Expose the application port
EXPOSE 8080

# Run the app
CMD ["npm", "run", "dev"]
