---
title: Self host
sidebar:
  order: 1
---

# Self-Hosting undb

**undb** can be self-hosted, providing you with the flexibility to deploy the platform in your own environment. There are two primary methods to self-host **undb**: using a Docker image or building from source.

## Method 1: Deploying with Docker

### 1. Pull the Docker Image

- **Docker Image**: The official **undb** Docker image is available from GitHub Container Registry. You can pull the image using the following command:

  ```bash
  docker pull ghcr.io/undb-io/undb
  ```

### 2. Run the Docker Container

- **Start the Container**: Once the image is pulled, you can start a new container using the following command:

  ```bash
  docker run -d -p 3721:3721 ghcr.io/undb-io/undb
  ```

  This command will run **undb** on port 3721, which is the default port for the platform.

### 3. Access undb

- **Access the Platform**: After the container is running, you can access **undb** via your web browser at `http://localhost:3721` (or replace `localhost` with your server's IP address if hosted remotely).

## Method 2: Building from Source

### 1. Clone the Repository

- **Get the Source Code**: First, clone the **undb** repository from GitHub:

  ```bash
  git clone https://github.com/undb-io/undb.git
  ```

### 2. Install Dependencies

- **Install with Bun**: Navigate to the cloned repository's directory and install the necessary dependencies using **Bun**:

  ```bash
  cd undb
  bun install
  ```

### 3. Build the Project

- **Build the Binary**: After installing the dependencies, build the project to create the **undb** binary:

  ```bash
  bun build
  ```

  This will compile the project and produce a `undb` binary file.

### 4. Run undb

- **Start undb**: You can now run **undb** using the binary file that was generated:

  ```bash
  ./undb
  ```

  By default, **undb** will start on port 3721, but you can configure it as needed.

## Summary

Self-hosting **undb** offers flexibility and control over your deployment. Whether you choose to deploy via Docker or build from source, both methods provide a straightforward way to run **undb** in your own environment. Choose the method that best fits your infrastructure and get started with your self-hosted instance of **undb**.
