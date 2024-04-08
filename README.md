## Authentication

### Backend

- JWT-based authentication is used.
- Ensure `JWT_SECRET` is set in your environment variables.

### Frontend

- Users can log in and out using the provided components.
- Tokens are stored in `localStorage`.

## Login

1. **Navigate to login page**:
   - URL: `/login`

2. **Submit credentials**:
   - Provides an authentication token.

## Logout

1. **Click logout button**:
   - Clears token from `localStorage` and redirects to login page.