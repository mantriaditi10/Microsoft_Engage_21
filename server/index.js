const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');

// Should be placed in .env file for security
// Keeping it here just for easy local access
const CONNECTION_URL = 'mongodb+srv://dbtest:cnbctv18@engage.hbm0b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Using Express
const app = express();

// Import routes
const userRoutes = require('./routes/user.js');
const blogRoutes = require('./routes/blogPosts.js');

// Middleware
app.use(express.json({ limit: '30mb', extended: true, }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/blogs', blogRoutes);

const PORT = 5000;

// Connecting to Database
mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true },
  { iseUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
  .catch((error) => console.log(error));