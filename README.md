## Authentication

### Register
- Endpoint: `POST /register`
- Request Body: `{ "name": "User Name", "email": "user@example.com", "password": "password" }`
- Response: `{ "token": "jwt_token" }`

### Login
- Endpoint: `POST /login`
- Request Body: `{ "email": "user@example.com", "password": "password" }`
- Response: `{ "token": "jwt_token" }`