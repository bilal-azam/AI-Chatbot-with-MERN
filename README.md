# AI Chatbot Project

## Overview
This project is an AI chatbot application built using the MERN stack (MongoDB, Express, React, Node.js) with Redux for state management. The application is deployed using AWS services.

## Features
- Chatbot interaction
- State management with Redux
- Backend API for message handling
- Unit and E2E tests

## Installation
1. Clone the repository: `git clone <repo-url>`
2. Install dependencies for client and server:
   - For client: `cd client && npm install`
   - For server: `cd server && npm install`

## Running the Application
1. Start the server: `cd server && npm start`
2. Start the client: `cd client && npm start`

## Testing
- Unit tests: `cd client && npm test` and `cd server && npm test`
- E2E tests: `cd client && npx cypress open`

## Deployment
The application is deployed using AWS Elastic Beanstalk for the backend and S3 for the frontend static files.

## Contributing
Contributions are welcome. Please open an issue or a pull request to suggest improvements.