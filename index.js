import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;

app.get("/health", (req, res) => {
  res.send("All Good ;)");
});

app.get("/", (req, res) => {
  res.send("Welcome to Homepage :)");
});

// 🏥 Hospital Application Page
app.get("/hospital", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hospital Application</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background: #f4f9fd;
        }
        header {
          background: #0077b6;
          color: white;
          padding: 20px;
          text-align: center;
        }
        nav {
          background: #0096c7;
          display: flex;
          justify-content: center;
          padding: 10px;
        }
        nav a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
        .container {
          padding: 40px;
          max-width: 900px;
          margin: auto;
        }
        .card {
          background: white;
          padding: 20px;
          margin: 20px 0;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .card h2 {
          margin-top: 0;
          color: #0077b6;
        }
        footer {
          text-align: center;
          background: #0077b6;
          color: white;
          padding: 15px;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>CityCare Hospital</h1>
        <p>Your Health, Our Priority</p>
      </header>
      <nav>
        <a href="/hospital">Home</a>
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="container">
        <div class="card" id="services">
          <h2>Our Services</h2>
          <ul>
            <li>24/7 Emergency Care</li>
            <li>General Medicine</li>
            <li>Pediatrics & Maternity</li>
            <li>Diagnostic & Laboratory</li>
          </ul>
        </div>
        <div class="card" id="doctors">
          <h2>Our Doctors</h2>
          <p>Meet our expert team of qualified and compassionate doctors.</p>
        </div>
        <div class="card" id="contact">
          <h2>Contact Us</h2>
          <p>Email: contact@citycarehospital.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>
      <footer>
        <p>&copy; 2025 CityCare Hospital. All Rights Reserved.</p>
      </footer>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`The server is Running on Port ${PORT} 🚀`);
});
