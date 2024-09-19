---
title: Environment variables
sidebar:
  order: 2
---

# Environment Variables Overview

**undb** is designed to be used out of the box without the need for any environment variable configuration. However, for advanced customization and integration, you can use environment variables to control various aspects of the system, including logging, database connections, email settings, authentication providers, and storage configurations. Below are tables that detail each environment variable, its purpose, and possible values.

## Logging Configuration

**Logging configuration** determines the verbosity of the application logs.

| Variable    | Description                     | Possible Values                  | Example Value |
| ----------- | ------------------------------- | -------------------------------- | ------------- |
| `LOG_LEVEL` | Controls the verbosity of logs. | `debug`, `info`, `warn`, `error` | `debug`       |

**Authentication configuration** controls user registration and admin account settings.

| Variable                    | Description                              | Possible Values | Example Value       |
| --------------------------- | ---------------------------------------- | --------------- | ------------------- |
| `UNDB_DISABLE_REGISTRATION` | Whether to disable new user registration | `true`, `false` | `false`             |
| `UNDB_ADMIN_EMAIL`          | Email address for the admin account      | N/A             | `admin@example.com` |
| `UNDB_ADMIN_PASSWORD`       | Password for the admin account           | N/A             | `securePassword123` |

> **Note:** Setting `UNDB_DISABLE_REGISTRATION` to `true` will prevent new users from self-registering. This is useful when you want to restrict access or manage user accounts manually. `UNDB_ADMIN_EMAIL` and `UNDB_ADMIN_PASSWORD` are used to set up the initial admin account, ensuring there's an admin login available on first deployment.

## Database Configuration

**Database configuration** sets up the database connection for **undb**.

| Variable                   | Description                                                  | Possible Values   | Example Value                   |
| -------------------------- | ------------------------------------------------------------ | ----------------- | ------------------------------- |
| `UNDB_DB_PROVIDER`         | Specifies the database provider being used.                  | `sqlite`, `turso` | `turso`                         |
| `UNDB_DB_TURSO_URL`        | The URL for the Turso database connection, if using `turso`. | N/A               | `libsql://127.0.0.1:8080?tls=0` |
| `UNDB_DB_TURSO_AUTH_TOKEN` | The authentication token for accessing the Turso database.   | N/A               | `your-auth-token`               |

> **Note:** If `UNDB_DB_PROVIDER` is set to `sqlite`, **undb** will use a local SQLite database. If set to `turso`, **undb** will connect to a database hosted on [Turso](https://turso.tech/).

## Base URL Configuration

**Base URL configuration** defines the root URL where **undb** is hosted.

| Variable        | Description                            | Example Value           |
| --------------- | -------------------------------------- | ----------------------- |
| `UNDB_BASE_URL` | The base URL where **undb** is hosted. | `http://localhost:3721` |

## Email Configuration

**Email configuration** controls how **undb** sends emails, including verification emails and notifications.

| Variable                 | Description                                                           | Possible Values         | Example Value                                     |
| ------------------------ | --------------------------------------------------------------------- | ----------------------- | ------------------------------------------------- |
| `UNDB_MAIL_PROVIDER`     | Specifies the email provider used for sending emails.                 | `nodemailer`, `mailgun` | `mailgun`                                         |
| `UNDB_MAIL_HOST`         | The SMTP server host for sending emails (if using `nodemailer`).      | N/A                     | `localhost`, `email-smtp.us-west-1.amazonaws.com` |
| `UNDB_MAIL_PORT`         | The port for the SMTP server (if using `nodemailer`).                 | N/A                     | `1025`, `465`                                     |
| `UNDB_MAIL_SECURE`       | Enables secure connection (SSL/TLS) for SMTP (if using `nodemailer`). | `true`, `false`         | `false`                                           |
| `UNDB_MAIL_USER`         | SMTP server username for authentication (if using `nodemailer`).      | N/A                     | `your-smtp-username`                              |
| `UNDB_MAIL_PASS`         | SMTP server password for authentication (if using `nodemailer`).      | N/A                     | `your-smtp-password`                              |
| `UNDB_MAIL_DEFAULT_FROM` | The default email address to use as the sender.                       | N/A                     | `hi@undb.io`                                      |
| `UNDB_MAILGUN_API_KEY`   | The API key for Mailgun (if using `mailgun`).                         | N/A                     | `your-mailgun-api-key`                            |
| `UNDB_MAILGUN_DOMAIN`    | The Mailgun domain used for sending emails.                           | N/A                     | `mg.undb.io`                                      |

> **Note:** If `UNDB_MAIL_PROVIDER` is set to `nodemailer`, **undb** will use SMTP for sending emails. If set to `mailgun`, you need to configure `UNDB_MAILGUN_API_KEY` and `UNDB_MAILGUN_DOMAIN`.

## Authentication Providers

**Authentication providers** allow **undb** to integrate with external identity providers like GitHub and Google for OAuth authentication.

| Variable               | Description                                    | Example Value |
| ---------------------- | ---------------------------------------------- | ------------- |
| `GITHUB_CLIENT_ID`     | The client ID for GitHub OAuth authentication. | N/A           |
| `GITHUB_CLIENT_SECRET` | The client secret for GitHub OAuth.            | N/A           |
| `GOOGLE_CLIENT_ID`     | The client ID for Google OAuth authentication. | N/A           |
| `GOOGLE_CLIENT_SECRET` | The client secret for Google OAuth.            | N/A           |

## Storage Configuration

**Storage configuration** determines where **undb** stores data, such as file uploads.

| Variable                        | Description                                      | Possible Values        | Example Value           |
| ------------------------------- | ------------------------------------------------ | ---------------------- | ----------------------- |
| `UNDB_STORAGE_PROVIDER`         | Specifies the storage service provider.          | `local`, `minio`, `s3` | `minio`                 |
| `UNDB_STORAGE_PRIVATE_BUCKET`   | The bucket name for storing private data.        | N/A                    | `undb-local`            |
| `UNDB_MINIO_STORAGE_ENDPOINT`   | The endpoint for the MinIO storage service.      | N/A                    | `127.0.0.1`             |
| `UNDB_MINIO_STORAGE_PORT`       | The port for the MinIO storage service.          | N/A                    | `9000`                  |
| `UNDB_MINIO_STORAGE_REGION`     | The region setting for MinIO storage.            | N/A                    | `us-east-1`             |
| `UNDB_MINIO_STORAGE_USE_SSL`    | Whether to use SSL for MinIO storage connection. | `true`, `false`        | `false`                 |
| `UNDB_MINIO_STORAGE_ACCESS_KEY` | The access key for MinIO storage.                | N/A                    | `your-minio-access-key` |
| `UNDB_MINIO_STORAGE_SECRET_KEY` | The secret key for MinIO storage.                | N/A                    | `your-minio-secret-key` |

> **Note:** If `UNDB_STORAGE_PROVIDER` is set to `local`, files will be stored locally on the server. If set to `minio`, files will be stored on a MinIO server, and if set to `s3`, they will be stored on an Amazon S3 bucket.
