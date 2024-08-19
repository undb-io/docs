---
title: openapi.json
sidebar:
  order: 3
---

### Accessing OpenAPI JSON Specification in **undb**

**undb** provides an API endpoint that allows developers to retrieve the OpenAPI JSON specification for a specific table within a base. This specification can be used to generate client libraries, create API documentation, or integrate with other tools that support OpenAPI.

#### How to Access the OpenAPI JSON Specification

To obtain the OpenAPI JSON specification for a specific table, you can send a `GET` request to the following endpoint:

```
/api/bases/{baseName}/tables/{tableName}/openapi.json
```

- **`baseName`**: The name of the base where the table resides.
- **`tableName`**: The name of the table for which you want to retrieve the OpenAPI specification.

#### Example Request

```bash
curl -X GET "https://your-undb-instance.com/api/bases/myBase/tables/myTable/openapi.json" \
-H "x-undb-api-token: your_api_token"
```

#### Usage

Once you have retrieved the OpenAPI JSON file, you can use it in various ways:

1. **Client Code Generation**:

   - You can generate client libraries in different programming languages using tools like `Swagger Codegen` or `OpenAPI Generator`. This allows you to interact with your **undb** tables using a native client for your language of choice.

2. **API Documentation**:

   - The OpenAPI JSON specification can be imported into API documentation tools like `Swagger UI` or `Redoc`. This makes it easy to create user-friendly documentation for your API endpoints.

3. **Integration with Other Tools**:
   - Many tools support OpenAPI specifications for purposes such as testing, monitoring, and automation. By integrating your **undb** API with these tools, you can streamline your development and deployment workflows.

#### Example: Using OpenAPI with Swagger UI

To visualize the API and interact with it via a browser, you can use `Swagger UI`. Simply load the OpenAPI JSON file into Swagger UI to explore the API and make live requests.

1. Install Swagger UI locally or use the hosted version.
2. Provide the OpenAPI JSON URL or upload the file.
3. Swagger UI will generate an interactive API documentation where you can test different endpoints and view the API structure.

#### Security

The API request to fetch the OpenAPI JSON specification requires a valid API token. This token should be passed in the `x-undb-api-token` header. Make sure to keep your API tokens secure and rotate them regularly.

#### Example Response

Here’s a simplified version of the OpenAPI specification with a focus on key paths and components:

```json
{
  "openapi": "3.1.0",
  "info": {
    "version": "1.0.0",
    "title": "Templates API"
  },
  "servers": [
    {
      "url": "/api"
    }
  ],
  "components": {
    "securitySchemes": {
      "apiKeyAuth": {
        "type": "apiKey",
        "in": "header",
        "name": "x-undb-api-token"
      }
    },
    "schemas": {
      "RecordId": {
        "type": "string"
      },
      "RecordValues": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "Title": { "type": "string", "nullable": true },
          "createdAt": { "type": "string" },
          "createdBy": { "type": "string" },
          "updatedAt": { "type": "string" },
          "updatedBy": { "type": "string" },
          "autoIncrement": { "type": "number" },
          "baseId": { "type": "string" },
          "spaceId": { "type": "string" }
        },
        "required": ["id", "createdAt", "createdBy", "updatedAt", "updatedBy", "autoIncrement", "baseId", "spaceId"]
      },
      "Record": {
        "type": "object",
        "properties": {
          "id": { "$ref": "#/components/schemas/RecordId" },
          "values": { "$ref": "#/components/schemas/RecordValues" }
        },
        "required": ["id", "values"]
      }
    }
  },
  "paths": {
    "/bases/{baseName}/tables/{tableName}/records": {
      "get": {
        "summary": "Get records",
        "tags": ["Record"],
        "security": [{ "apiKeyAuth": [] }],
        "responses": {
          "200": {
            "description": "Record data",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "total": { "type": "integer", "minimum": 0 },
                    "records": {
                      "type": "array",
                      "items": { "$ref": "#/components/schemas/Record" }
                    }
                  },
                  "required": ["total", "records"]
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create record",
        "tags": ["Record"],
        "security": [{ "apiKeyAuth": [] }],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "values": { "$ref": "#/components/schemas/RecordValues" }
                },
                "required": ["values"]
              }
            }
          }
        },
        "responses": {
          "201": { "description": "Record Created" }
        }
      }
    },
    "/bases/{baseName}/tables/{tableName}/records/{recordId}": {
      "get": {
        "summary": "Get record by ID",
        "tags": ["Record"],
        "security": [{ "apiKeyAuth": [] }],
        "parameters": [
          {
            "name": "recordId",
            "in": "path",
            "required": true,
            "schema": { "type": "string" }
          }
        ],
        "responses": {
          "200": {
            "description": "Record data",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": { "$ref": "#/components/schemas/Record" }
                  },
                  "required": ["data"]
                }
              }
            }
          }
        }
      },
      "patch": {
        "summary": "Update record",
        "tags": ["Record"],
        "security": [{ "apiKeyAuth": [] }],
        "parameters": [
          {
            "name": "recordId",
            "in": "path",
            "required": true,
            "schema": { "type": "string" }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "values": { "$ref": "#/components/schemas/RecordValues" }
                },
                "required": ["values"]
              }
            }
          }
        },
        "responses": {
          "201": { "description": "Record Updated" }
        }
      },
      "delete": {
        "summary": "Delete record by ID",
        "tags": ["Record"],
        "security": [{ "apiKeyAuth": [] }],
        "parameters": [
          {
            "name": "recordId",
            "in": "path",
            "required": true,
            "schema": { "type": "string" }
          }
        ],
        "responses": {
          "200": { "description": "Record Deleted" }
        }
      }
    }
  }
}
```

#### Benefits

- **Automation**: The OpenAPI spec automates client generation and API testing, reducing manual coding efforts.
- **Consistency**: Ensures consistency across your API consumers, as they all rely on the same API definitions.
- **Ease of Integration**: Simplifies integrating the **undb** API with third-party services or other internal systems.

By leveraging the OpenAPI specification provided by **undb**, developers can enhance productivity, improve API integration, and maintain high-quality documentation effortlessly.
