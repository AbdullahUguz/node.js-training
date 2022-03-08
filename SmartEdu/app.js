const express = require('express');

const mongoose = require('mongoose');

const session = require('express-session')

const MongoStore = require('connect-mongo')

const flash = require('connect-flash');

const methodOverride = require('method-override');

const pageRoute = require('./routes/pageRoute');

const courseRoute = require('./routes/courseRoute');

const categoryRoute = require('./routes/categoryRoute');

const userRoute = require('./routes/userRoute');

const app = express();

// Connect Db
mongoose
  .connect('mongodb+srv://smartEdu:VxtDEtYHd0U3pt0v@cluster0.zn4wy.mongodb.net/smartEdu-dbe?retryWrites=true&w=majority')
  .then(() => {
    console.log('Db Connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Template
app.set('view engine', 'ejs');


// Global Variable
global.userIN = null;


//Middlewears
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(session({
  secret: 'my_keyboard_cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb+srv://smartEdu:VxtDEtYHd0U3pt0v@cluster0.zn4wy.mongodb.net/smartEdu-dbe?retryWrites=true&w=majority' })
}))
app.use(flash());
app.use((req,res,next) => {
  res.locals.flashMessages = req.flash();
  next();
});
app.use(methodOverride('_method',{
  methods:['POST','GET']
}))

// Routes

app.use('*',(req,res,next)=>{
  userIN =req.session.userID;
  next();
});

app.use('/', pageRoute);

/*
app.use('/about', pageRoute);

app.use('/register', pageRoute);
*/

app.use('/users', userRoute);

app.use('/courses', courseRoute);

app.use('/categories', categoryRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
