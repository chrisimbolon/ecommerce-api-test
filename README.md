Simple RESTful Product API
A minimal Node.js + Express API for managing product data. Built for a backend coding assessment.

# Tech Stack
#### Node.js – JavaScript runtime environment.
#### Express.js – Web framework for building APIs.
#### File System (fs) – To read/write product data from products.json.

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

GET /

Response:
"API is running"

Features
```bash
GET /products — Fetch all products
GET /products/:id — Fetch product by ID
GET /products?category=Apparel — Filter by category
```
. Send a POST request
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

