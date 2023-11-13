# Use a Node.js base image for a slim and efficient setup
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy all the source files to the container
COPY . .

# Command to start the React app on port 5000
CMD ["npm", "start", "--port", "5000"]

# Expose port 5000
EXPOSE 5000
