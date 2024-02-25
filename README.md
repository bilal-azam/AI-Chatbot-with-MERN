# MyApp Documentation

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/my-app.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables in `.env` file.

## Development

1. Start the development server:
   ```
   npm start
   ```

2. Run linting and tests:
   ```
   npm run lint
   npm test
   ```

## Docker

1. Build Docker image:
   ```
   docker build -t my-app .
   ```

2. Run Docker container:
   ```
   docker run -p 5000:5000 my-app
   ```

## Deployment

1. Deploy using CloudFormation:
   ```
   aws cloudformation deploy --template-file cloudformation/infrastructure.yaml --stack-name my-app-infrastructure --capabilities CAPABILITY_NAMED_IAM
   ```

2. Monitor the application through CloudWatch dashboards.

3. Check the application status:
   ```
   curl http://<load-balancer-url>/api/health
   ```