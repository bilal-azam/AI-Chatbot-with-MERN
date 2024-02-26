## GitHub Actions Workflows

### CI Workflow

- **File**: `.github/workflows/ci.yml`
- **Purpose**: Runs linting and tests on code changes to the main branch.

### Deployment Workflow

- **File**: `.github/workflows/deploy.yml`
- **Purpose**: Builds and pushes Docker image to AWS ECR and deploys to ECS.

### Cypress Tests Workflow

- **File**: `.github/workflows/cypress.yml`
- **Purpose**: Runs end-to-end tests using Cypress on code changes to the main branch.

### Infrastructure Changes Workflow

- **File**: `.github/workflows/infrastructure.yml`
- **Purpose**: Deploys CloudFormation stack changes related to infrastructure.