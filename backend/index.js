const express = require('express');
require('dotenv').config();
const app = express();
require('./DB/DB')

// Debug: Check if environment variables are loaded

console.log('PORT:', process.env.PORT || 3000);
const cors = require('cors');
const cookieParser = require('cookie-parser');
const UserRoute = require('./Routes/User.Route');


const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'], // Multiple origins for development
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  exposedHeaders: ['set-cookie']
}))
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.get('/', (req, res) => {
  res.send('this is root file !');
});
app.use('/user', UserRoute)


app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`the server is running on the port ${PORT}`);
});
