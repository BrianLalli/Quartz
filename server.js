const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const colors = require('colors')
const app = express();
const path = require('path')
const publicPath = path.join(process.cwd(), 'frontend', 'dist');
const session = require("express-session");
const exphbs = require('express-handlebars');


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
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// Express middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));



// Connect to SQL database
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


//send api calls to router
app.use('/api/Projects', require('./backend/routes/projectRoutes'));
// app.use('api/Users', require('./routes/userRoutes'));
app.use(express.static(publicPath))


// connect to db before starting server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// To Do:
// Add app.use(USERS)

