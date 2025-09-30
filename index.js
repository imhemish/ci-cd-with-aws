import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;

app.get("/health", (req, res) => {
  res.send("All Good ;)");
});

// 🛒 E-commerce Homepage (Flipkart-like)
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ShopEasy - Your Online Store</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #f1f3f6; }
        
        /* Navbar */
        header {
          background: #2874f0;
          color: white;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        header h1 { font-size: 1.5rem; }
        header input {
          padding: 8px;
          border: none;
          border-radius: 2px;
          width: 40%;
        }
        header button {
          background: #ff9f00;
          border: none;
          padding: 8px 15px;
          margin-left: 10px;
          border-radius: 2px;
          cursor: pointer;
          font-weight: bold;
        }

        nav {
          background: #fff;
          display: flex;
          justify-content: space-around;
          padding: 15px 0;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        nav a {
          text-decoration: none;
          color: #333;
          font-weight: 600;
        }
        nav a:hover { color: #2874f0; }

        /* Banner */
        .banner {
          margin: 20px;
          border-radius: 10px;
          overflow: hidden;
        }
        .banner img { width: 100%; border-radius: 10px; }

        /* Products */
        .section {
          background: #fff;
          margin: 20px;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
        .section h2 { margin-bottom: 15px; }
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
        }
        .card {
          background: #fafafa;
          border: 1px solid #eee;
          border-radius: 8px;
          text-align: center;
          padding: 15px;
          transition: transform 0.2s;
        }
        .card:hover { transform: scale(1.05); }
        .card img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          margin-bottom: 10px;
        }
        .card h3 {
          font-size: 1rem;
          margin-bottom: 5px;
        }
        .card p {
          color: green;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .card button {
          padding: 8px 12px;
          border: none;
          background: #2874f0;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }
        footer {
          text-align: center;
          background: #172337;
          color: #fff;
          padding: 15px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <!-- Navbar -->
      <header>
        <h1>ShopEasy</h1>
        <div>
          <input type="text" placeholder="Search for products, brands and more" />
          <button>Search</button>
        </div>
      </header>

      <!-- Categories -->
      <nav>
        <a href="#">Mobiles</a>
        <a href="#">Fashion</a>
        <a href="#">Electronics</a>
        <a href="#">Home</a>
        <a href="#">Appliances</a>
        <a href="#">More</a>
      </nav>

      <!-- Banner -->
      <div class="banner">
        <img src="https://via.placeholder.com/1200x300.png?text=Big+Sale+Up+to+70%25+Off" alt="Banner">
      </div>

      <!-- Product Section -->
      <div class="section">
        <h2>Best Deals</h2>
        <div class="products">
          <div class="card">
            <img src="https://via.placeholder.com/100.png?text=Phone" alt="Phone">
            <h3>Smartphone X</h3>
            <p>₹14,999</p>
            <button>Add to Cart</button>
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/100.png?text=Headphones" alt="Headphones">
            <h3>Wireless Headphones</h3>
            <p>₹1,999</p>
            <button>Add to Cart</button>
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/100.png?text=Laptop" alt="Laptop">
            <h3>Laptop Pro</h3>
            <p>₹49,999</p>
            <button>Add to Cart</button>
          </div>
          <div class="card">
            <img src="https://via.placeholder.com/100.png?text=Shoes" alt="Shoes">
            <h3>Running Shoes</h3>
            <p>₹2,499</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer>
        <p>&copy; 2025 ShopEasy. All rights reserved.</p>
      </footer>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(\`The server is Running on Port \${PORT} 🚀\`);
});
