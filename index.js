import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;

app.get("/health", (req, res) => {
  res.send("All Good ;)");
});

// 🏥 Attractive Hospital Application Page
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CityCare Hospital</title>
      <style>
        * { box-sizing: border-box; }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          margin: 0;
          background: #f0f8ff;
          color: #333;
        }
        header {
          background: linear-gradient(135deg, #0077b6, #00b4d8);
          color: white;
          padding: 60px 20px;
          text-align: center;
        }
        header h1 {
          margin: 0;
          font-size: 2.8rem;
        }
        header p {
          font-size: 1.2rem;
          margin-top: 10px;
        }
        nav {
          background: #0096c7;
          display: flex;
          justify-content: center;
          padding: 12px;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        nav a {
          color: white;
          text-decoration: none;
          margin: 0 20px;
          font-weight: bold;
          transition: 0.3s;
        }
        nav a:hover {
          color: #ffdd00;
        }
        .container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
        }
        .section {
          margin-bottom: 60px;
        }
        .card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.1);
          margin-bottom: 20px;
          transition: 0.3s;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        h2 {
          color: #0077b6;
          margin-bottom: 20px;
        }
        ul li { margin: 8px 0; }

        /* Doctors Grid */
        .doctors {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .doctor-card {
          text-align: center;
          padding: 20px;
        }
        .doctor-card img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 10px;
        }

        /* Appointment Form */
        form {
          display: grid;
          gap: 15px;
        }
        input, select, button {
          padding: 12px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
        button {
          background: #0077b6;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #023e8a;
        }

        footer {
          text-align: center;
          background: #0077b6;
          color: white;
          padding: 20px;
          margin-top: 40px;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>CityCare Hospital 🏥</h1>
        <p>Compassion. Care. Commitment.</p>
      </header>
      <nav>
        <a href="#services">Services</a>
        <a href="#doctors">Doctors</a>
        <a href="#appointment">Book Appointment</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="container">
        <!-- Services -->
        <div class="section" id="services">
          <h2>Our Services</h2>
          <div class="card">
            <ul>
              <li>🚑 24/7 Emergency & Ambulance</li>
              <li>🩺 General Medicine</li>
              <li>👶 Pediatrics & Maternity</li>
              <li>🧪 Diagnostic & Laboratory</li>
              <li>❤️ Cardiology</li>
            </ul>
          </div>
        </div>

        <!-- Doctors -->
        <div class="section" id="doctors">
          <h2>Our Doctors</h2>
          <div class="doctors">
            <div class="card doctor-card">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Doctor">
              <h3>Dr. Arjun Mehta</h3>
              <p>Cardiologist</p>
            </div>
            <div class="card doctor-card">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Doctor">
              <h3>Dr. Priya Sharma</h3>
              <p>Pediatrician</p>
            </div>
            <div class="card doctor-card">
              <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Doctor">
              <h3>Dr. Rakesh Nair</h3>
              <p>General Physician</p>
            </div>
          </div>
        </div>

        <!-- Appointment Form -->
        <div class="section" id="appointment">
          <h2>Book an Appointment</h2>
          <div class="card">
            <form onsubmit="event.preventDefault(); alert('Appointment booked successfully! 🎉');">
              <input type="text" placeholder="Full Name" required />
              <input type="number" placeholder="Age" required />
              <select required>
                <option value="">Select Department</option>
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>General Medicine</option>
                <option>Orthopedics</option>
              </select>
              <input type="date" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <!-- Contact -->
        <div class="section" id="contact">
          <h2>Contact Us</h2>
          <div class="card">
            <p>📧 Email: contact@citycarehospital.com</p>
            <p>📞 Phone: +91-9876543210</p>
            <p>📍 Address: 123 Health Avenue, Ambala, India</p>
          </div>
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
  console.log(\`The server is Running on Port \${PORT} 🚀\`);
});
