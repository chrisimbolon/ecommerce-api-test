Simple RESTful Product API
A minimal Node.js + Express API for managing product data. Built for a backend coding assessment.

# Tech Stack
** Node.js – JavaScript runtime environment.
** Express.js – Web framework for building APIs.
** File System (fs) – To read/write product data from products.json.


# API Documentation

Getting Started:

creation:
```bash
mkdir ecommerce-api-test
cd ecommerce-api-test
```

## How to Run
```bash
# Install dependencies
npm install

# Start the server
nodemon server.js
```
Server runs at:
```bash
http://localhost:5050
```

### API Endpoints

Features
```bash
GET /products — Fetch all products
GET /products/:id — Fetch product by ID
GET /products?category=Apparel — Filter by category
```

GET /

or go the browser :
```bash
http://localhost:5050/
```
Response:
"API is running"

GET /products
Returns all products.
Example:
```bash
curl http://localhost:5050/products
```
or go the browser :
```bash
http://localhost:5050/products
```

GET /products?category=Apparel
Returns products filtered by category.
Example:
```bash
curl "http://localhost:5050/products?category=Apparel"
```

or go the browser :
```bash
http://localhost:5050/products?category=Apparel
```

resut :
```bash
[{"id":1,"name":"T-Shirt","price":20,"category":"Apparel","description":"Soft cotton T-shirt, perfect for everyday wear."},{"id":3,"name":"Jeans","price":45,"category":"Apparel","description":"Classic straight-fit jeans made from premium denim."}]
```

GET /products/:id
Returns a product by its ID.
Example:
```bash
curl http://localhost:5050/products/1
```

or go the browser :
```bash
http://localhost:5050/products/1
```

Send a POST request
With curl:
```bash
curl -X POST http://localhost:5050/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Mouse",
    "price": 29.99,
    "category": "Electronics",
    "description": "Ergonomic wireless mouse"
  }'
```

