const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

//import routes
const userRoutes = require('./routes/user.js');
const blogRoutes = require('./routes/blogPosts.js');

//Middleware
app.use(express.json({limit: '30mb', extended: true,}));
app.use(express.urlencoded({ limit:'30mb', extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoutes);
app.use('/blogs', blogRoutes);

const PORT = 5000;

//Connecting to Database
mongoose.connect(
    process.env.CONNECTION_URL, 
    { useNewUrlParser: true },
    { iseUnifiedTopology: true })
    .then(() => app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`)))
    .catch((error) => console.log(error));