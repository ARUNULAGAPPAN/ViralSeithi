# 📰 Viral Seithi - A Dynamic News Aggregator

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 🌐 Overview

**Viral Seithi** is a visually captivating and interactive news aggregator web application built by **Arun Ulagappan**. It fetches real-time news articles from across the world using the NewsAPI and displays them in a stunning masonry-style layout. With elegant CSS animations, a glowing UI, and a star-trailing cursor, Viral Seithi offers a magical and modern news-reading experience.

[🔗 GitHub Repository](https://github.com/ARUNULAGAPPAN/ViralSeithi)  
▶️ **Live Demo:** *Coming Soon...*

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/81e0b52e-19f1-4da8-b88b-1d6b4ebaf09e)


---

## ✨ Features

### 📰 Core Functionality
- **Real-Time News Feed:** Loads top headlines instantly on page load.
- **Category Filter:** Choose from categories like Business, Sports, Technology, etc.
- **Keyword Search:** Find articles on any topic using the search bar.
- **Interactive Cards:** Each article displays author, source, and includes:
  - Web Share button (fallback supported)
  - “Collect” toggle button

### 💎 Advanced UI/UX
- **Masonry Grid Layout:** Pinterest-style responsive layout using CSS Columns.
- **Glowing Hover Effects:** Cards and buttons softly glow on hover.
- **Card Lift Animation:** Smooth elevation effect on card hover.
- **Custom Star Cursor:** A magical star-trailing effect follows the mouse.
- **Responsive Design:** Mobile-friendly and desktop-optimized interface.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic and structured markup.
- **CSS3**: Custom animations, hover effects, grid layout.
  - CSS Grid, Flexbox, Columns
  - CSS Variables for theme consistency
  - Keyframe animations (cursor, spinner)
- **JavaScript (ES6+)**:
  - `fetch()` API for data requests
  - Async/Await for promise handling
  - DOM Manipulation
  - Event Delegation for dynamic buttons

---

## 🔌 Powered by NewsAPI.org

**NewsAPI** provides real-time global news content from thousands of sources.

### Endpoints Used:
- `/v2/top-headlines`: Fetches articles by category.
- `/v2/everything`: Enables keyword search.

> **Note**: You must have your own API key from [NewsAPI.org](https://newsapi.org) to use this project.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ARUNULAGAPPAN/ViralSeithi.git
cd ViralSeithi
2. Get Your API Key
Go to newsapi.org.

Register and get a free API key.

3. Add the API Key
Edit the file js/script.js:

javascript
Copy
Edit
const apiKey = 'YOUR_API_KEY_HERE'; // <-- Replace with your key
4. Run the Project
Open index.html in your web browser.
You should see the latest headlines load automatically!

🎨 Styling Philosophy
Minimalism: Clean UI to let content shine.

Interactivity: Glow and lift effects enhance feedback.

Magic Touch: The star-trailing cursor adds a unique feel.

Responsiveness: Mobile-first design using media queries.

💡 Future Enhancements
🔄 Infinite Scrolling

🌙 Theme Toggle (Light/Dark)

🧾 User Collections & Profiles

📖 In-App Article Viewer

📜 License
This project is licensed under the MIT License.
Created with ❤️ by Arun Ulagappan.

🙌 Acknowledgments
NewsAPI.org for the free news service.

Badge and tech icon providers (Shields.io, SimpleIcons).
