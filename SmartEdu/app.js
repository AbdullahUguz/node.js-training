const express = require('express');

const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute');

const courseRoute = require('./routes/courseRoute');

const categoryRoute = require('./routes/categoryRoute');

const app = express();

// Connect Db
mongoose
  .connect('mongodb://localhost/smartedu-db')
  .then(() => {
    console.log('Db Connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Template
app.set('view engine', 'ejs');

//Middlewears
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// Routes
app.use('/', pageRoute);

app.use('/about', pageRoute);

app.use('/courses', courseRoute);

app.use('/categories', categoryRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
