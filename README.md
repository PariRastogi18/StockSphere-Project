# 📈 StockSphere

A full-stack stock market trading platform inspired by Zerodha, built using the MERN Stack. The application provides secure user authentication, a responsive dashboard, real-time stock price updates using Socket.IO, portfolio management, and order placement functionality.

## 🚀 Live Demo

- 🌐 Frontend: https://stock-sphere-project-mtil.vercel.app
- ⚙️ Backend API: https://stocksphere-project.onrender.com

## ✨ Features

- 🔐 User Authentication (Signup/Login)
- 🍪 JWT Authentication with Cookies
- 📊 Interactive Trading Dashboard
- 📈 Real-time Stock Price Updates using Socket.IO
- 💼 Portfolio Holdings
- 📌 Positions Management
- 🛒 Buy/Sell Order Placement
- 📱 Fully Responsive UI
- ☁️ Deployed on Vercel & Render

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- React Toastify
- CSS
- Font Awesome

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Socket.IO
- Cookie Parser

## 📂 Project Structure

```
StockSphere-Project
│
├── Frontend
│   ├── public
│   ├── src
│   └── package.json
│
├── Backend
│   ├── Controllers
│   ├── Middlewares
│   ├── Model
│   ├── Routes
│   ├── utils
│   ├── index.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/PariRastogi18/StockSphere-Project.git
```

### Frontend

```bash
cd Frontend
npm install
npm start
```

### Backend

```bash
cd Backend
npm install
npm start
```

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
TOKEN_KEY=your_secret_key
```

### Frontend (.env)

```env
REACT_APP_API_URL=http://localhost:5000
```

## 📸 Screenshots

Add screenshots of:

- Home Page
  <img width="1497" height="678" alt="image" src="https://github.com/user-attachments/assets/0044c176-e699-477e-aa3d-7e2bb7fcf8be" />

- Login Page
  <img width="561" height="560" alt="image" src="https://github.com/user-attachments/assets/e2ba6bb6-8aae-45c8-9977-4560996049ba" />
  
- Signup Page
  <img width="527" height="635" alt="image" src="https://github.com/user-attachments/assets/0f18cbac-d69a-425d-bddc-3a03471c8d55" />

- Dashboard
  <img width="1512" height="667" alt="image" src="https://github.com/user-attachments/assets/59f7fe3f-fdac-43ba-b0cc-b599bece2039" />

- Holdings
  <img width="1505" height="672" alt="image" src="https://github.com/user-attachments/assets/b18921d3-81de-4741-bd97-73ae7a203b1a" />
  
- Positions
  <img width="1520" height="527" alt="image" src="https://github.com/user-attachments/assets/43afab4b-489f-4a4c-b0ec-dd74f7ff9eb2" />


## 🚀 Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

## 📌 Future Improvements

- Watchlist
- Live Market API Integration
- Portfolio Analytics
- Stock Search
- User Profile
- Dark Mode
- Price Charts

## 👩‍💻 Author

**Pari Rastogi**

- GitHub: https://github.com/PariRastogi18
- LinkedIn: *www.linkedin.com/in/pari-rastogi-907336309*

## ⭐ Support

If you like this project, don't forget to ⭐ star the repository.
