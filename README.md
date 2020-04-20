# COMM ON

## General info
A full-stack web application allowing the user to register and log in. Being able to create events, we encourage users to host events online or in-person (of course when this pandemic is over)  to create community connections

**Technologies**
 - [NodeJs](https://nodejs.org/en/)
 - [Express](http://expressjs.com/)
 - [ESLint](https://github.com/eslint/eslint)
 - [body-parser](https://github.com/expressjs/body-parser)
 - [cookie-parser](https://github.com/expressjs/cookie-parser#readme)
 - [bcrypt](https://github.com/kelektiv/node.bcrypt.js#usage)
 - [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
 - [nodepostgres](https://node-postgres.com/features/pooling)
 - Deploment - [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

**Features**
* MVP:
*   Users will be able to create an account and log in
*   Users will be able to create/delete an event.
* Future:
*   Users will be able to see other users events
*   Users will be able to RSVP events.
*   Users will be able to search event by location/purpose.

**Table Definitions**
```sql
create database network;
CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT,
email TEXT UNIQUE,
password TEXT
);
CREATE TABLE events (
id SERIAL PRIMARY KEY,
creator INT REFERENCES users(id),
date_created TIMESTAMP,
title TEXT,
description TEXT,
purpose TEXT,
location TEXT,
date_time TIMESTAMP,
type TEXT
);
CREATE TABLE rsvp (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(id),
  user_id INT REFERENCES users(id)
);
```

**[Application deployed here](www.google.com)**