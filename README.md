# Node.js Express TypeScript Boilerplate

A boilerplate for building Node.js applications using Express and TypeScript. This project comes pre-configured with best practices including TypeScript, ESLint, Prettier, Jest, and Docker.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Development Mode](#development-mode)
  - [Build the Application](#build-the-application)
- [Environment Configuration](#environment-configuration)
- [Docker Support](#docker-support)
  - [Build Docker Image](#build-docker-image)
  - [Run Docker Container](#run-docker-container)
- [Plugins](#plugins)
- [Project Structure](#project-structure)
- [CORS Support](#cors-support)
- [Security Enhancements](#security-enhancements)
- [Error Handling](#error-handling)
- [Logs](#logs)
- [Testing Framework](#testing-framework)
- [Database Integration](#database-integration)
- [Health Checks](#health-checks)
- [Linting and Formatting](#linting-and-formatting)
- [Build Checks with GitHub Actions](#build-checks-with-github-actions)

## Features

- **Express**: A minimalist web framework for building robust APIs in Node.js.
- **TypeScript**: Enhances code quality and developer experience with strong typing.
- **ESLint & Prettier**: Integrates code linting and formatting tools to enforce best practices and maintain consistent code styling.
- **Jest**: A built-in testing framework for writing and executing unit and integration tests efficiently.
- **Docker**: Supports containerization for seamless deployment across different environments.
- **Environment Configuration**: Utilizes `.env` files for easy management of environment-specific configurations.
- **pnpm**: A fast and disk-efficient package manager that optimizes dependency management.
- **Winston**: Implements a versatile logging library for structured logging and error tracking.
- **Rate Limiting**: Employs `express-rate-limit` to prevent abuse and control request traffic to your API.
- **Error Handling Middleware**: Centralized error handling to capture and respond to errors in a consistent format.
- **GitHub Workflows**: Automated build checks and tests using GitHub Actions for CI/CD integration.
- **Husky Configuration**: Set up pre-commit hooks to enforce code quality checks before commits.
- **MongoDB**: Integrated support for MongoDB, enabling efficient data storage and retrieval in a NoSQL database environment.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**  
   Clone the repository using Git:

   ```bash
   git clone https://github.com/khguruge/nodejs-express-ts-boilerplate.git
   cd nodejs-express-ts-boilerplate
   ```

2. **Install Dependencies**  
   Use `pnpm` to install the required dependencies:
   ```bash
   pnpm install
   ```

## Running the Application

### Development Mode

To run the application in development mode, use the following command. This command will watch for file changes and automatically rebuild the application:

```bash
  pnpm start:local
```

### Build the Application

To build the application, run the following command:

```bash
  pnpm run build
```

## Environment Configuration

The application uses .env files for environment configuration. Example of a .env.local file:

```bash
PACKAGE_NAME=nodejs-express-ts-boilerplate
NODE_ENV=local
PORT=8080
DB_URI=mongodb+srv://AKJHSHSY:youareafool@cluster-dev.ahjka6.mongodb.net/development
```

Make sure to create appropriate .env files for different environments ( .env.local , .env.staging, .env.production, etc.).

## Docker Support

This boilerplate includes a Dockerfile to run the application inside a Docker container.

### Build Docker Image

```bash
docker build -t nodejs-express-ts-boilerplate .
```

### Run Docker Container

```bash
docker run -p 8080:8080 nodejs-express-ts-boilerplate
```

## Plugins

The application is currently extended with the following plugins:

| Plugin             | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| express            | Fast, unopinionated, minimalist web framework for Node.js.                    |
| cors               | Middleware for enabling Cross-Origin Resource Sharing (CORS).                 |
| dotenv             | Loads environment variables from a `.env` file.                               |
| cookie-parser      | Parses Cookie header and populates `req.cookies`.                             |
| http-status-codes  | A set of constants for HTTP status codes.                                     |
| mongoose           | MongoDB object modeling tool designed to work in an asynchronous environment. |
| winston            | A versatile logging library for Node.js.                                      |
| express-winston    | Logging middleware for Express with Winston.                                  |
| yup                | Schema builder for value parsing and validation.                              |
| helmet             | Helps secure Express apps by setting various HTTP headers.                    |
| express-rate-limit | Basic rate-limiting middleware for Express.                                   |

## Project Structure

```sh
├── tests                   # Unit and integration tests
├── .github                 # GitHub-related files (workflows, issue templates, etc.)
├── .husky                  # Git hooks configuration
├── .vscode                 # Settings and configurations specific to VS Code for a consistent development environment
├── .coverage               # Reports and data related to code coverage, generated by testing tools
├── dist                    # Compiled output (after build)
├── logs                    # Log files
├── src
│   ├── config              # Contains configuration files for the application
│   ├── constants           # Stores constant values used throughout the application
│   ├── controllers         # Defines the logic for handling application routes
│   ├── dto                 # Data Transfer Objects for data validation and transformation
│   ├── exceptions          # Custom exception classes for error handling
│   ├── middleware          # Middleware functions for processing requests
│   ├── routes              # Defines the API endpoints and routing logic
│   ├── schema              # Mongoose schemas for database models
│   ├── utils               # Utility functions and helpers
│   └── server.ts           # Main entry point for configuring and starting the Express app
├── .dockerignore           # Files to ignore in Docker builds
├── .env                    # Environment variables
├── .env.local              # Local environment variables
├── .env.production         # Production environment variables
├── .env.staging            # Staging environment variables
├── .gitignore              # Files and directories to ignore in git
├── .prettierignore         # Files to ignore when using Prettier
├── .prettierrc             # Prettier configuration
├── commitlint.config.js    #Configuration for commit linting
├── Dockerfile              # Docker configuration file
├── eslint.config.mjs       # ESLint configuration file
├── jest.config.ts          # Jest configuration file
├── package.json            # Project manifest
├── pnpm-lock.yaml          # pnpm lockfile
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript configuration file
```

## CORS Support

- Configured to manage Cross-Origin Resource Sharing (CORS) for secure API access.
- CORS options can be customized in `src/config/env.config.ts`.

## Security Enhancements

- **Helmet:** Secures the app by using `helmet` to set various HTTP headers.
- **Rate Limiting:** Protects against excessive requests from a single IP using `express-rate-limit`.
- **Input Validation:** Utilizes `yup` for validating and sanitizing incoming requests.

## Error Handling

- Implements comprehensive error handling with structured error responses and detailed logging.
- A global error-handling middleware is in place to catch and manage all errors.

## Logs

- All logs for incoming requests and error reports are stored in the `/logs` folder for easy access and monitoring.

## Testing Framework

- Equipped with Jest for running unit and integration tests, ensuring reliable and bug-free code.

## Database Integration

- Integrated with MongoDB, offering seamless database connectivity and operations using Mongoose.

## Health Checks

- Provides endpoints for health checks to monitor the API's operational status and uptime.

## Linting and Formatting

- Uses ESLint and Prettier for enforcing consistent code quality and formatting across the codebase.

## Build Checks with GitHub Actions

- Automated build and test checks integrated via GitHub Actions to ensure code stability before merging.
