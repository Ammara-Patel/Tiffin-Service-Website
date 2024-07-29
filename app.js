const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();

mongoose.connect('mongodb://localhost/tiffin_service', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const reviewRoutes = require('./routes/review');

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/review', reviewRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
