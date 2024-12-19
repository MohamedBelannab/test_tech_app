
import express from "express";
import fs from "fs/promises";
import cors from "cors";
import serverless from 'serverless-http';
import path from 'path';  // Import path to resolve file paths
import { fileURLToPath } from "url"; 

// Create an Express app
const app = express();

// Enable CORS
app.use(cors("*"));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Endpoint to get all products
app.get("/.netlify/functions/api/products", async (req, res) => {
  try {
    // Use absolute path to access database.json
    const dataPath = path.join(__dirname, "database.json");  // Absolute path to database.json
    console.log("Reading file from:", dataPath);

    const data = await fs.readFile(dataPath, "utf-8");  // Read file content as a string
    res.json(JSON.parse(data));  // Parse and send the data as JSON
  } catch (err) {
    console.error('Error reading products:', err);
    return res.status(500).json({ message: "Error reading products file" });
  }
});

// Endpoint to get a single product by ID
app.get("/.netlify/functions/api/products/:id", async (req, res) => {
  const productId = parseInt(req.params.id, 10);
  try {
    // Use absolute path to access database.json
    const dataPath = path.join(__dirname, "database.json");
    const data = await fs.readFile(dataPath, "utf-8");
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
// app.listen(5000, () => {
//   console.log(`Server is running on http://localhost:${5000}`);
// });

// Export the serverless handler for Netlify
export const handler = serverless(app);
