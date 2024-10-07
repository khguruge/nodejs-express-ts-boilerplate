# Base image
FROM node:20.4.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install project dependencies
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN pnpm build

# Expose the port the app will run on
EXPOSE 8080

# Define the command to run the app
CMD [ "pnpm", "start" ]
