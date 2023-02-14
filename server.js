const express = require('express');
const exphbs = require('express-handlebars');
const mysql2 = require('mysql2');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const session = require('express-session');
const sequelizeSession = require('connect-session-sequelize');

// Load environment from .env file
dotenv.config();

const app = express();

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Initialize Sequelize
const sequelize = require('./config/connection');

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

const port = process.env.PORT || 3001;

// Sync DB and start server
sequelize.sync({ force: false }).then( () => {
    app.listen(port, () => {
        console.log(`listening on http://localhost:${PORT}`);
    });
});
