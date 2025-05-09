# Express App with Rate Limiting, Logging, and Security

## Overview

This is a simple Express application that uses several middlewares to enhance security, logging, and rate limiting. It includes the following key features:

- **Rate Limiting**: Protects the server from potential abuse by limiting the number of requests a user can make in a given timeframe.
- **Logging**: Uses Morgan to log requests for better tracking and debugging.
- **Security**: Uses Helmet to add various security headers to protect the app from common web vulnerabilities.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Setup](#setup)
- [Usage](#usage)
- [Dependencies](#dependencies)

## Features

- **Rate Limiting**: Limits requests to 100 per 100 minutes per IP.
- **Logging**: Logs HTTP requests with the "common" format using Morgan.
- **Security**: Adds HTTP headers with Helmet to improve security.
- **Simple API**: A single `GET` endpoint at `/` that returns a "Hello, World!" message.

## Architecture

The app uses an Express-based architecture and consists of the following components:

1. **Request Handler**: The main Express app handles incoming requests.
2. **Logging Middleware**: Morgan logs each incoming request with a standard format.
3. **Security Middleware**: Helmet adds HTTP headers to secure the application from common threats.
4. **Rate Limiting**: An Express-rate-limit middleware restricts excessive requests from a single IP.

Below is an architecture diagram that represents the flow of data through the application.

```plaintext
          +-------------+
          |  Client     |
          +------+------+
                 |
                 v
          +-------------+        +----------------+       +--------------------+
          |  Express    |------->|  Morgan Logging|------>|  Helmet Security   |
          |  Middleware |        +----------------+       +--------------------+
          +-------------+                |
                 |                      v
                 |            +---------------------+
                 |            |  Rate Limiting      |
                 |            |  (express-rate-limit)|
                 |            +---------------------+
                 |
                 v
          +-------------+
          |  Hello World |
          |  Response   |
          +-------------+
```

### Explanation of the Diagram:

1. **Client**: Sends an HTTP request to the server.
2. **Express Middleware**: The main Express app processes the request.
3. **Morgan Logging**: Logs the details of the request (method, URL, status code, etc.).
4. **Helmet Security**: Adds security-related HTTP headers to the response.
5. **Rate Limiting**: Checks if the client has exceeded the allowed number of requests within a time window (100 requests per 100 minutes).
6. **Response**: Returns the "Hello, World!" message.

## Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

Ensure you have a `config.js` file at the root of the project, with a `PORT` defined:

```js
module.exports = {
  PORT: 3000, // You can change the port as needed
};
```

## Usage

To start the server:

```bash
npm start
```

The server will listen on the port specified in `config.js` (default is `3000`).

Once the server is running, you can visit the application by navigating to:

```
http://localhost:3000
```

You should see a "Hello, World!" message.

## Dependencies

- `express`: Web framework for Node.js
- `morgan`: HTTP request logger middleware
- `helmet`: Middleware for securing Express apps by setting HTTP headers
- `express-rate-limit`: Basic rate-limiting middleware for Express

---
