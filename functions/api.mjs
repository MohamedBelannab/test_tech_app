import express from "express";
import { readFile } from "fs/promises";
import cors from "cors";
import serverless from 'serverless-http';


// Create an Express app
const app = express();

// Enable CORS and JSON parsing
app.use(cors("*"));
app.use(express.json());

// Endpoint to get all products
app.get("/.netlify/functions/api/products", async (req, res) => {
  try {
    const data = await readFile("./database.json");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error('Error reading products:', err);
    return res.status(500).json({ message: "Error reading products file" });
  }
});

// Endpoint to get a single product by ID
app.get("/.netlify/functions/api/products/:id", async (req, res) => {
  const productId = parseInt(req.params.id, 10);
  
  try {
    const data = await readFile("database.json");
    const products = JSON.parse(data);
    const product = products.find((p) => p.id === productId);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.json(product);
  } catch (err) {
    console.error('Error reading product:', err);
    return res.status(500).json({ message: "Error reading products file" });
  }
});

// Export the serverless handler
export const handler = serverless(app);