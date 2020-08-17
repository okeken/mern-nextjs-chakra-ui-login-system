const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoose = require('mongoose');

const routesSignUp = require('./routes/users');
const routesViewAllUsers = require('./routes/users');
const routesViewUserById = require('./routes/users');
const routesViewUserByUsername = require('./routes/users');

const routesDeleteUser = require('./routes/users');

const db = process.env.DB;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

  .then((result) => {
    console.log(`Database connected, server running on port ${port}`);
  })

  .catch((err) => console.log(err));

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    //User Signup
    server.use('/v1', routesSignUp);
    //Read Users
    server.use('/v1', routesViewAllUsers);
    server.use('/v1', routesViewUserById);
    server.use('/v1', routesViewUserByUsername);

    //Delete User
    server.use('/v1', routesDeleteUser);

    server.get('/', (req, res) => {
      const Home = '/';
      return app.render(req, res, Home);
    });

    server.get('/a', (req, res) => {
      return app.render(req, res, '/a', req.query);
    });

    server.get('/b', (req, res) => {
      return app.render(req, res, '/b', req.query);
    });

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((e) => console.log('An error occurred', e));
