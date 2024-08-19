---
title: Use with openapi-ts
sidebar:
  order: 4
---

Here’s how you can use the [openapi-ts](https://github.com/drwpow/openapi-typescript) library with the `undb` platform in a Node.js environment to generate TypeScript types and create an API client for SvelteKit.

### Step 1: Install Dependencies

First, install the necessary dependencies:

```bash
npm install openapi-typescript openapi-fetch
```

### Step 2: Fetch the OpenAPI Schema and Generate TypeScript Types

Create a script (`generate-types.js`) that fetches the OpenAPI schema from the **undb** platform and generates the corresponding TypeScript types:

```javascript
import { writeFile } from 'fs/promises'
import fetch from 'node-fetch'
import openapiTS, { astToString } from 'openapi-typescript'

// Replace with your environment variables or configuration
const UNDB_API_KEY = process.env.UNDB_API_KEY
const PUBLIC_UNDB_HOST = process.env.PUBLIC_UNDB_HOST
const UNDB_TEMPLATE_BASE_NAME = process.env.UNDB_TEMPLATE_BASE_NAME
const UNDB_TEMPLATE_TABLE_NAME = process.env.UNDB_TEMPLATE_TABLE_NAME

async function generateTypes() {
  const response = await fetch(
    `${PUBLIC_UNDB_HOST}/api/bases/${UNDB_TEMPLATE_BASE_NAME}/tables/${UNDB_TEMPLATE_TABLE_NAME}/openapi.json`,
    {
      headers: {
        'X-Undb-Api-Token': UNDB_API_KEY,
      },
    }
  )

  if (!response.ok) {
    throw new Error('Failed to fetch OpenAPI schema')
  }

  const data = await response.json()
  const ast = await openapiTS(data)
  const content = astToString(ast)

  await writeFile(`./src/lib/api/${UNDB_TEMPLATE_TABLE_NAME}.d.ts`, content)
  console.log('TypeScript types generated successfully')
}

generateTypes().catch(console.error)
```

### Step 3: Run the Type Generation Script

You can run this script using Node.js:

```bash
node generate-types.js
```

This will generate the TypeScript types in the `./src/lib/api/templates.d.ts` file.

### Step 4: Use the Generated Types in Your SvelteKit Project

In your SvelteKit project, you can use the generated types and set up an API client as follows:

```typescript
// src/lib/api/templateClient.ts
import { UNDB_API_KEY } from '$env/static/private'
import { PUBLIC_UNDB_HOST } from '$env/static/public'
import createClient from 'openapi-fetch'
import type { components, paths } from './templates' // Importing generated types

const headers = new Headers()
headers.set('X-Undb-Api-Token', UNDB_API_KEY)
headers.set('User-Agent', 'undb-sveltekit-template')

export const templateClient = createClient<paths>({
  baseUrl: PUBLIC_UNDB_HOST + '/api',
  headers,
})

export type Template = components['schemas']['Record']
```

### Step 5: Make API Requests Using the Client

Now, you can use the `templateClient` to interact with your **undb** API. Here’s an example of how to fetch records:

```typescript
// Example usage in a SvelteKit load function
const templates = await templateClient.GET('/bases/templates/tables/templates/records', {
  fetch,
  cache: 'no-cache',
})

if (templates.error) {
  console.error(templates.error)
} else {
  console.log(templates.data)
}
```

### Summary

1. **Generate Types**: The script fetches the OpenAPI spec from **undb** and generates TypeScript types.
2. **Create API Client**: The generated types are used to create a type-safe API client.
3. **Use in SvelteKit**: The API client can be used in SvelteKit to make requests with proper type checking.

This approach ensures that your API interactions are type-safe and well-integrated into your SvelteKit project.
