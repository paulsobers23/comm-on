# comm-on
A full stack web application allowing apiring/junior level software engineers to connect with high level engineers in a world where everything is virtual.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* - NodeJs
* - Express
* - ESLint
* - body-parser
* - cookie-parser
* - bcrypt
* - jsonwebtoken
* Database - nodepostgres
* Deploment - Heroku
* [Features](#features)
* MVP :
*   Users will be able to create an account and log in
*   Users will be able to create/update/delete an event
*
* Future :
*   Users will be able to see other users events
*   Users will be able to RSVP events

Table Definitions
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
