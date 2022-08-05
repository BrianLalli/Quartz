const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const colors = require('colors')
const app = express();
const path = require('path')
const session = require("express-session");
const exphbs = require('express-handlebars');
const Sequelize = require("sequelize");
const connect = require("connect");
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: '',
    database: 'projects_db'
  },
  console.log(`Connected to the projects_db database.`)
);
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3301
});
const SequelizeStore = require("connect-session-sequelize")(
  connect.session.Store
);


// Set up sessions with cookies using SQL as storage
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 21600000, //changed to 6 hours
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

app.use(session(sess));
// use handlebars 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');
// app.engine('handlebars', hbs.engine);

// Express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));

//send api calls to router
app.use('/api/Projects', require('./backend/routes/projectRoutes'));
// app.use('api/Users', require('./routes/userRoutes'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


