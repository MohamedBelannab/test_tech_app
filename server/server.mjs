import express from "express";
import fs from "fs/promises";
import cors from "cors";
import serverless from 'serverless-http'; 

// Create an Express app
const app = express();
const port = 5000; // local dev

// Enable CORS
app.use(cors("*"));
app.use(express.json());


// Endpoint to get all products
app.get("/api/products", async (req, res) => {
  try {
    const data = await fs.readFile("database.json");
    res.json(JSON.parse(data));
  } catch (err) {
    return res.status(500).json({ message: "Error reading products file" });
  }
});

// Endpoint to get a single product by ID
app.get("/api/products/:id", async (req, res) => {
  const productId = parseInt(req.params.id, 10);
  try {
    const data = await fs.readFile(path.join(__dirname, "database.json"), "utf-8");
    const products = JSON.parse(data);
    const product = products.find((p) => p.id === productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    return res.status(500).json({ message: "Error reading products file" });
  }
});

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

export const handler = serverless(app);
