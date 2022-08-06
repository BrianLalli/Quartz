const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const router = require('express').Router();
const helpers = require('./utils/helpers');
const sequelize = require('./backend/config/connection.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const colors = require('colors')

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 21600000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// app.set('layouts', './views/layouts');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//send api calls to router
app.use('/api/Projects', require('./backend/routes/projectRoutes'));
// app.use('api/Users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.render('all');
});


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'.bgGreen + ' http://localhost:3001/'.rainbow));
});

