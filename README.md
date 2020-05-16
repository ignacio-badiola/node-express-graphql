# node-express-graphql
Simple express graphql server with mysql db using sequelize as ORM

## Configurations

- Passwords stored using bcrypt
- Use `mysql` DB and sequelize as ORM. Update `config/index.js` file with db configuration
- Default db name: `express-graphql-db`

## Install

```
npm i
```

## Usage

### Run server on port 4000
```
npm start
```

## Available operations

### Queries

- allUsers: [User]
- getUser(userId: ID!): User

### Mutations

- createUser(userInput: UserInput): User!
- updateUser(userId: ID!userInput: UserInput): User!
- deleteUser(userId: ID!): User

