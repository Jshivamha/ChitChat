const express = require('express');
require('dotenv').config();
const app = express();
require('./DB/DB')
const UserRoute = require('./Routes/User.Route')

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.get('/', (req, res) => {
  res.send('this is root file !');
});
app.use('/user', UserRoute)

// Add a test route to verify the server is working
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.listen(PORT, () => {
  console.log(`the server is running on the port ${PORT}`);
});
