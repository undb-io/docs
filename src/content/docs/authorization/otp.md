---
title: OTP Authentication
sidebar:
  order: 2
---

# One-Time Password (OTP) Authentication

**undb** supports passwordless authentication using One-Time Passwords (OTP). This method provides a secure way to log in without the need to remember or manage passwords.

## How It Works

### 1. Authentication Flow

1. **Request OTP**
   - User enters their email address
   - System generates a unique OTP code
   - OTP is sent to the user's email address
   - OTP remains valid for a limited time (typically 5-10 minutes)

2. **Verification**
   - User enters the received OTP code
   - System verifies the code matches and hasn't expired
   - Upon successful verification, user is logged in

### 2. Security Features

- **Time-Based Expiration**: Each OTP expires after a short period
- **Single Use**: OTP codes can only be used once
- **Rate Limiting**: System limits the number of OTP requests to prevent abuse
- **Email Verification**: OTPs are only sent to verified email addresses

## Using OTP Authentication

### 1. Login Process

1. Navigate to the login page
2. Click "Login with OTP"
3. Enter your email address
4. Check your email for the OTP code
5. Enter the OTP code in the verification screen
6. Access granted upon successful verification

### 2. Benefits

- **No Password Required**: Eliminates the need to remember passwords
- **Enhanced Security**: Each login attempt requires a new code
- **Reduced Risk**: No stored passwords that could be compromised
- **User Friendly**: Simple and straightforward login process

## Technical Implementation

- **Code Generation**: OTP codes are randomly generated using cryptographically secure methods
- **Storage**: OTP codes are stored as hashed values with expiration timestamps
- **Delivery**: Codes are sent via email using configured SMTP or email service
- **Verification**: System compares hashed input against stored hash

## Environment Variables for Self-Hosting

When deploying undb in a self-hosted environment, you need to configure the following environment variables:

| Variable | Description | Required |
|----------|-------------|-----------|
| `UNDB_OTP_SECRET` | Secret key used for OTP generation and verification | Yes |
| `UNDB_AUTH_OTP_ENABLED` | Enable/disable OTP authentication (true/false) | Yes |

> **Note**: Make sure to set a strong, unique value for `UNDB_OTP_SECRET` to ensure the security of your OTP implementation.

## Best Practices

1. **Check Spam Folder**: If OTP email is not received, check spam/junk folder
2. **Don't Share OTP**: Never share OTP codes with anyone
3. **Verify Email Source**: Ensure OTP emails are from legitimate undb addresses
4. **Timely Entry**: Enter OTP promptly before expiration

OTP authentication provides a secure and convenient way to access your undb account without the complexity of password management.
