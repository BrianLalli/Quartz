const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 21600000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/Projects', require('./routes/projectRoutes'));
app.use('/api/Users', require('./routes/userRoutes'));
app.use('/api/comment', require('./routes/commentRoutes'));
app.use('/', require('./routes/homeRoutes'));


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
