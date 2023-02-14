// Exress requirements
const express = require('express');
const path = require('path');
const routes = require('./controllers');

// Handlebars requirements
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

// DB requirements
const mysql2 = require('mysql2');
const Sequelize = require('sequelize');
const sequelize = require('./config/connection');
const session = require('express-session');
const sequelizeSession = require('connect-session-sequelize');

// Misc requirements
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');


// Load environment from .env file
dotenv.config();
const app = express();

// Config server paths and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Config Handlebars
const hdbrs = exphbs.create({ helpers });
// hdbrs.engine({ defaultLayout: 'main' });
app.engine('handlebars', hdbrs.engine);
app.set('view engine', 'handlebars');

// Set up Express session
const SequelizeStore = sequelizeSession(session.Store);
const sessionStore = new SequelizeStore({ db: sequelize });
app.use(session(
    {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        SameSite: "Strict",
        store: sessionStore
    }
));

const PORT = process.env.PORT || 3001;

// Sync DB and start server
sequelize.sync({ force: false }).then( () => {
    app.listen(PORT, () => {
        console.log(`listening on http://localhost:${PORT}`);
    });
});
