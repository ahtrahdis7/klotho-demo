const express = require('express');

const users = require('./users/userapi');
const admins = require('./users/adminapi');

const app = express();

app.use(users)
app.use(admins)

/**
 * @capability https_server
 */

app.listen(3000, async () => {
  console.log(`App listening locally`)
})

exports.app = app
