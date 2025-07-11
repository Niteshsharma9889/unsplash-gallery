# 📸 Unsplash Image Gallery

A responsive and dynamic image gallery built with **React** and the **Unsplash API**, supporting category-based filtering, lazy loading, keyboard navigation, and lightbox previews.

---

## 🌐 Live Demo

👉 [View Live Site](https://niteshsharma9889.github.io/unsplash-gallery) (Currently demo not working)

---

## 🚀 Features

- 🔍 Fetches images from Unsplash using Axios
- 🗂️ Category and tag-based filtering
- 📷 Lightbox modal with keyboard navigation
- 🚀 Lazy loading for performance
- 🌙 Dark mode toggle *(optional)*
- ⚙️ `.env` support for API key security
- 📱 Fully responsive on all screen sizes

---

## 🛠️ Tech Stack

| Category        | Tools Used                             |
|-----------------|-----------------------------------------|
| **Frontend**    | React, HTML5, CSS3, JavaScript (ES6+)   |
| **HTTP Client** | Axios                                   |
| **API**         | [Unsplash Developer API](https://unsplash.com/developers) |
| **Deployment**  | GitHub Pages *(CI-ready)*               |

---

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/niteshsharma9889/unsplash-gallery.git
cd unsplash-gallery
Install dependencies

npm install
Set up your Unsplash API key

Create a .env file in the root directory:

REACT_APP_UNSPLASH_ACCESS_KEY="your_access_key_here"
🔒 Note: Never commit .env files to GitHub.

Start the development server

npm start
🧪 Scripts
Command	Description
npm start	Launches dev server on localhost:3000
npm run build	Builds production-ready React app
npm run deploy	Deploys to GitHub Pages (if configured)
📁 Folder Structure
src/
├── components/
│   ├── Gallery.js
│   ├── ImageModal.js
│   └── FilterBar.js
├── App.js
├── index.js
└── styles/
    └── App.css
📌 Deployment
This app is deployed on GitHub Pages. To redeploy:

npm run build
npm run deploy
🧠 Credits
Built by Nitesh Sharma

Powered by Unsplash API

📄 License
This project is open-source under the MIT License.
