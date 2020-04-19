# express-graphql
Simple express graphql server

## Install dependencies

```
npm i
```

## How to run `helloWorldQuery`

- Run server on port 4000
```
npm start
```

- Open Postman and create a new POST request with the following body (raw - JSON):
```
{
	"query": "{ helloWorldQuery { name price } }"
}
```

Expected result:
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
