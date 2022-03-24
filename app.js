require('./db');
require('./auth');

const passport = require('passport');
const express = require('express');
const path = require('path');

/**
 * Still unsure about how I will use routes
 *
 * const routes = require('./routes/index');
 * const words = require('./routes/words');
 * const game = require('./routes/game');
 */

// const routes = require('./routes/index');
// const list = require('./routes/list');
// const listItem = require('./routes/list-item');

const app = express();

/**
 * Since I plan on using React as a front end framework I'm not sure what to do with handlebars templating, my best
 * assumption is that I should not use handlebars if I am using React
 */

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'secret cookie thang (store this elsewhere!)',
    resave: true,
      saveUninitialized: true
};
app.use(session(sessionOptions));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// passport setup
app.use(passport.initialize());
app.use(passport.session());

// make user data available to all templates
// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

// app.use('/', routes);
// app.use('/list', list);
// app.use('/list-item', listItem);

app.listen(3000);
