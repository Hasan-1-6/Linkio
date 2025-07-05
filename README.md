
# 🔗 Link.io — A Simple Link Shortener

Link.io is a minimal link shortener built using **MongoDB** and **Express.js**.  
It features a basic static frontend made with **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**, making it a full backend-focused project.

---

## ✨ Features

- Shortens long URLs to clean, shareable links
- Automatically redirects to the original URL when visited
- Persistent storage using MongoDB
- Simple and responsive UI
- Lightweight and easy to deploy

---

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose

**Frontend:**
- HTML
- Tailwind CSS
- Vanilla JavaScript

---

## 📦 Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/link.io.git
   cd link.io
   ```
   


2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=your_port
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

5. Open your browser at `http://localhost:3000`

---

## 🌐 API Endpoints

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| POST   | `/sendFullUrl` | Create a short URL   |
| GET    | `/:shortUrl`   | Redirect to full URL |

---

## ✍️ Author

**Hasan Dilshad Husain**

## 📝 License

This project is open source and free to use under the [MIT License](LICENSE).




