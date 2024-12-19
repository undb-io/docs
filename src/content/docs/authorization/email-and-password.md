---
title: Email and Password Authentication
sidebar:
  order: 1
---

# Email and Password Authentication

Email and password authentication is the basic authentication method in **undb**. Users can create accounts and log in to the system using their email address and password.

## Key Features

### 1. Account Registration

- **Email Verification**: A valid email address is required for registration. The system will send a verification email to confirm the email's validity.
- **Password Requirements**: Passwords must meet the following security requirements:
  - Minimum 8 characters
  - Include both uppercase and lowercase letters
  - Include numbers
  - Include special characters

### 2. System Login

- **Email Login**: Use the registered email address as the login credential
- **Password Verification**: Enter the correct password to access the system
- **Login Session**: The system maintains the login state for a period after successful authentication

### 3. Password Reset

- **Forgot Password**: If you forget your password, you can reset it through the "Forgot Password" feature
- **Reset Process**:
  1. Click the "Forgot Password" link on the login page
  2. Enter your registered email address
  3. Check your email for the password reset link
  4. Click the link and set a new password
  5. Use the new password to log in

## Security Considerations

- **Password Encryption**: All passwords are encrypted before being stored in the database
- **Session Management**: Login sessions are securely managed to prevent unauthorized access
- **Rate Limiting**: Multiple failed login attempts will trigger temporary account lockouts to prevent brute force attacks

## Best Practices

1. **Strong Passwords**: Use strong, unique passwords for your account
2. **Regular Updates**: Change your password periodically
3. **Secure Email**: Ensure your email account is secure as it's used for password recovery
4. **Logout**: Always log out when using shared devices

Email and password authentication provides a secure and familiar way to access your **undb** account while maintaining the flexibility to reset your password when needed.
