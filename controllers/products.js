// controllers/products.js

const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "products.json");

// --- Helpers ---
const getData = () => {
  const jsonData = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(jsonData);
};

const saveData = async (data) => {
  const tmpPath = dataPath + ".tmp";
  await fs.promises.writeFile(tmpPath, JSON.stringify(data, null, 2), "utf8");
  await fs.promises.rename(tmpPath, dataPath);
};

// --- Controllers ---

// GET /products (optional ?category= query)
exports.getProducts = (req, res) => {
  const products = getData();

  if (req.query.category) {
    const filtered = products.filter(
      (p) => p.category.toLowerCase() === req.query.category.toLowerCase()
    );
    return res.json(filtered);
  }

  res.json(products);
};

// GET /products/:id
exports.getProductById = (req, res) => {
  const products = getData();
  const product = products.find((p) => p.id === parseInt(req.params.id, 10));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

// POST /products
exports.addProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body || {};
    const errors = [];

    // --- Validation ---
    if (!name || typeof name !== "string" || !name.trim()) {
      errors.push("name is required and must be a non-empty string");
    }

    const parsedPrice = Number(price);
    if (price === undefined || Number.isNaN(parsedPrice)) {
      errors.push("price is required and must be a number");
    } else if (parsedPrice < 0) {
      errors.push("price must be >= 0");
    }

    if (!category || typeof category !== "string" || !category.trim()) {
      errors.push("category is required and must be a non-empty string");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // --- Data update ---
    const products = getData();
    const maxId = products.length
      ? Math.max(...products.map((p) => Number(p.id) || 0))
      : 0;

    const newProduct = {
      id: maxId + 1,
      name: name.trim(),
      price: parsedPrice,
      category: category.trim(),
      description: description ? String(description).trim() : "",
    };

    products.push(newProduct);
    await saveData(products);

    res.status(201).json(newProduct);
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
