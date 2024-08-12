---
title: Environment variables
sidebar:
  order: 2
---

**undb** can be used out of the box without the need to configure any environment variables. However, for advanced customization and integration, you can use environment variables to control various aspects of the system, including logging, database connections, email settings, authentication providers, and storage configurations. Below are tables that detail each environment variable, its purpose, and possible values.

<div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
	You can run undb without any environment variable.
</div>

## Logging Configuration

**Logging configuration** determines the verbosity of the application logs.

| Variable    | Description                     | Possible Values                  | Example Value |
| ----------- | ------------------------------- | -------------------------------- | ------------- |
| `LOG_LEVEL` | Controls the verbosity of logs. | `debug`, `info`, `warn`, `error` | `debug`       |

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

| Variable                 | Description                                             | Example Value                                     |
| ------------------------ | ------------------------------------------------------- | ------------------------------------------------- |
| `UNDB_VERIFY_EMAIL`      | Enable or disable email verification for user sign-ups. | `true`, `false`                                   |
| `UNDB_MAIL_HOST`         | The SMTP server host for sending emails.                | `localhost`, `email-smtp.us-west-1.amazonaws.com` |
| `UNDB_MAIL_PORT`         | The port for the SMTP server.                           | `1025`, `465`                                     |
| `UNDB_MAIL_SECURE`       | Enables secure connection (SSL/TLS) for SMTP.           | `true`, `false`                                   |
| `UNDB_MAIL_USER`         | SMTP server username for authentication.                | N/A                                               |
| `UNDB_MAIL_PASS`         | SMTP server password for authentication.                | N/A                                               |
| `UNDB_MAIL_DEFAULT_FROM` | The default email address to use as the sender.         | `hi@undb.io`                                      |

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
