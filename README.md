# express-graphql
Simple express graphql server

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

##### Example:
```
query {
  helloWorldQuery {
    name,
    price
  }
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