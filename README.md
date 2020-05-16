# node-express-graphql
Simple express graphql server with mysql db using sequelize as ORM

## Install

```
npm i
```

## Usage

### Run server on port 4000
```
npm start
```

### How to try it:

#### 1 - Postman

- Open Postman and create a new POST request with the body type raw/JSON with the format:

```
{
    query: { resolverName { fieldsToFilter } }
}
```


###### Body example:
```
{
	"query": "{ helloWorldQuery { name price } }"
}

```

##### Expected result:
```
{
    "data": {
        "helloWorldQuery": {
            "name": "Hello world grapqhl",
            "price": 23
        }
    }
}
```

### 2 - GraphiQL

[GraphiQL](https://github.com/graphql/graphiql) is an in-browser tool for writing, validating, and testing GraphQL queries.

Since graphql allows `GET` method and `graphiql` is enabled (graphiql: true)

We can access to it through:
`http://localhost:4000/graphql`

#### QUERY ALL USERS 
```
query {
  allUsers {
    name
    email
  }
}
```
#### Create user
```
mutation CreateUser($userData: UserInput!){
  createUser(userInput: $userData) {
    id
    name
    city
  }
}
```
#### Update User
```
mutation UpdateUser($id: ID!, $userData: UserInput!){
  updateUser(userId: $id, userInput: $userData) {
    id
    name
    password
    city
  }
}
```
#### Delete user
```
mutation DeleteUser($id: ID!) {
  deleteUser(userId: $id) { 
    name
    email
    city
  }
}
```
#### VARIABLES
{
  "userData": {
    "name": "Ignacio",
    "email": "ignacio@graphql.com",
    "password": "test",
    "city": "Minas",
    "phone": "818 300 4433"
  },
  "id": "1"
}
```

##### Expected result:
```
# QUERY ALL USERS 
{
  "data": {
    "allUsers": [
      {
        "name": "Ignacio",
        "email": "ignacio@graphql.com"
      }
    ]
  }
}

# Create user
{
  "data": {
    "createUser": {
      "id": "1",
      "name": "Ignacio",
      "city": "Minas"
    }
  }
}
```