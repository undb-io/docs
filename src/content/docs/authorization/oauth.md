---
title: OAuth Authentication
sidebar:
  order: 3
---

# OAuth Authentication

**undb** supports OAuth authentication with GitHub and Google. This allows users to sign in using their existing accounts from these providers without setting up a separate password.

## Supported Providers

### 1. GitHub Authentication
- Sign in with your GitHub account
- Uses GitHub email for account matching
- Automatically links to existing undb account if email matches

### 2. Google Authentication
- Sign in with your Google account
- Uses Google email for account matching
- Automatically links to existing undb account if email matches

## Account Linking

When using OAuth authentication:
- If an account with the same email already exists in undb, the OAuth login will be automatically linked to that account
- If no matching account exists, a new account will be created
- No password is required when using OAuth authentication

## Self-Hosting Configuration

When deploying undb in a self-hosted environment, you need to configure the following environment variables:

### GitHub OAuth Configuration

```
UNDB_OAUTH_GITHUB_ENABLED=true
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Google OAuth Configuration

```
UNDB_OAUTH_GOOGLE_ENABLED=true
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Setting Up OAuth Providers

### 1. GitHub Setup
1. Go to GitHub Developer Settings
2. Create a new OAuth App
3. Set the callback URL to `https://your-undb-domain/api/auth/github/callback`
4. Copy the Client ID and Client Secret to your environment variables

### 2. Google Setup
1. Go to Google Cloud Console
2. Create a new OAuth 2.0 Client ID
3. Set the authorized redirect URI to `https://your-undb-domain/api/auth/google/callback`
4. Copy the Client ID and Client Secret to your environment variables

## Security Considerations

- OAuth tokens are securely stored and managed
- Email verification is handled by the OAuth providers
- No additional password management is required
- Account linking is automatic based on email matching

## Best Practices

1. **Enable Required Providers**: Only enable the OAuth providers you plan to use
2. **Secure Credentials**: Keep your client IDs and secrets secure
3. **Update Callback URLs**: Ensure callback URLs are correctly configured for your domain
4. **Monitor Usage**: Regularly review OAuth authentication logs

OAuth authentication provides a secure and convenient way to access your undb account while leveraging existing accounts from trusted providers.