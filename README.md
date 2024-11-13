### GraphQL API
--
## Description
    API simple feita com graphQL
--
## Tecnologias
- Node
- Typescript
- Apollo Server
- GraphQL
- Prisma

--
## Como utilizar
    
```bash`
    git clone https://github.com/romeucajamba/graphQL-API
    cd graphQL-API
    npm i
    npm run server
`

## Como fazer requisições
- Para pegar todos e inserir usuários
```bash` query {
  users {
    id
    name
    email
    phone_number
  }
}

mutation {
  createUser(name: "John Doe", email: "john.doe@example.com", phone_number: "123456789") {
    id
    name
    email
    phone_number
  }
}


`