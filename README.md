# GraphQL Attack Surface

GraphQL is a powerful tool for input validation. Unfortunately it's common to
simply pass strings through the type system which means it's potential for
increasing your applications security posture is not realized.

GraphQL is a boon to security teams because of how observable and automation
friendly it is. This tool queries a GraphQL endpoint and prints the input
fields that accept strings.

The hope is that by making these types more visible, this will help security
teams push developers to drop `GraphQLString` for Enums, Custom types, or
anything more precise than a generic string wherever possible.

## Usage

```bash
npx graphql-attack-surface https://swapi.graph.cool
```

## Limitations

* This is really new! Expect rough edges.
* Currently only works with endpoints that don't require authentication.
