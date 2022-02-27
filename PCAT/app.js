const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs'); // ejs views klasörüne bakar  ve klasöredeki .html leri .ejs yaparız
const path = require('path');
const methodOverride = require('method-override');
const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageController');
//const req = require('express/lib/request');

// start express
const app = express();

//connect db
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //  useFindAndModify: false
});

// template engine
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// routes

// Post
app.post('/photos', photoController.createPhoto);

// Put
app.put('/photos/:id', photoController.updatePhoto);

// Delete
app.delete('/photos/:id', photoController.deletePhoto);

// Get
app.get('/', photoController.getAllPhotos);

app.get('/photos/:id', photoController.getPhoto);

app.get('/photos/edit/:id', pageController.getEditPage);

app.get('/about', pageController.getAboutPage);

app.get('/add', pageController.getAddPage);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Sunuc ${PORT} portunda başlatıldı`);
});
