# MyApp Project Setup

## Introduction

This project is a full-stack application using MERN technology with state management using Redux. It includes Docker support, deployment to AWS ECS, and various automated workflows.

## Getting Started

1. **Clone the repository**:
   ```
   git clone https://github.com/your-repo/my-app.git
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the development server**:
   ```
   npm start
   ```

4. **Run linting, tests, and checks**:
   ```
   npm run check
   npm run check:security
   ```

## Docker

1. **Build Docker image**:
   ```
   docker build -t my-app .
   ```

2. **Run Docker container**:
   ```
   docker run -p 5000:5000 my-app
   ```

## Deployment

1. **Deploy using CloudFormation**:
   ```
   aws cloudformation deploy --template-file cloudformation/infrastructure.yaml --stack-name my-app-infrastructure --capabilities CAPABILITY_NAMED_IAM
   ```

2. **Update ECS Service**:
   ```
   aws ecs update-service --cluster my-app-cluster --service my-app-service --force-new-deployment
   ```

## CI/CD

- **CI Workflow**: Runs linting and tests on code changes.
- **Deployment Workflow**: Builds and pushes Docker image to AWS ECR and deploys to ECS.
- **Cypress Tests Workflow**: Runs end-to-end tests.
- **Infrastructure Changes Workflow**: Deploys infrastructure changes using CloudFormation.