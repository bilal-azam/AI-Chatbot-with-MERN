## Error Handling

### Backend

- Uses custom error middleware to handle server errors.
- Errors are logged and a generic message is sent to the client.

### Frontend

- Uses an error boundary to catch JavaScript errors in the component tree.

## Rate Limiting

- **Backend**: Rate limiting is implemented to prevent abuse.
- **Configuration**: Requests are limited to 100 per 15 minutes.