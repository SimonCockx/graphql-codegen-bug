import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "graphql/schema.graphql",
  documents: "graphql/operations.graphql",
  generates: {
    "graphql/generated/graphql.ts": {
      plugins: ["typescript-apollo-angular"]
    }
  }
};

export default config;
