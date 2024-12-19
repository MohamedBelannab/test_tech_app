

import express from "express";
import cors from "cors";
import serverless from 'serverless-http';

// Create an Express app
const app = express();

// Sample database (this should typically be replaced with a real database or an external data source)
const database = [
  {
    "id": 1,
    "name": "TERANOV-OR",
    "Emballage": "Sac de 25Kg",
    "image": "/images/product1.png"
  },
  {
    "id": 2,
    "name": "TERANOV-NK",
    "Emballage": "Sac de 25Kg",
    "image": "/images/product2.png"
  },
  {
    "id": 3,
    "name": "TERANOV POURPRE",
    "Emballage": "Sac de 25Kg",
    "image": "/images/product3.png"
  },
  {
    "id": 4,
    "name": "DROPFEED-II",
    "Emballage": "Sac de 25Kg",
    "image": "/images/product4.png"
  },
  {
    "id": 5,
    "name": "DROPFEED-III",
    "Emballage": "Sac de 25Kg",
    "image": "/images/product5.png"
  },
  {
    "id": 6,
    "name": "TERANOV-OR",
    "Emballage": "Sac de 25Kg",
    "image": "/images/product6.png"
  }
];

// Enable CORS
app.use(cors("*"));
app.use(express.json());

// Endpoint to get all products
app.get("/.netlify/functions/api/products", async (req, res) => {
  try {
   return  res.json(database);  // No need to parse, it's already a JSON object
  } catch (err) {
    console.error('Error retrieving products:', err);
    return res.status(500).json({ message: "Error retrieving products" });
  }
});

// Export the serverless handler for Netlify
export const handler = serverless(app);
// Start the server
// app.listen(5000, () => {
//   console.log(`Server is running on http://localhost:${5000}`);
// });
