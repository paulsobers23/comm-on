create database network;
​
CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT,
email TEXT UNIQUE,
password TEXT,
phone_number TEXT
);
​
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
​
CREATE TABLE rsvp (
  id SERIAL PRIMARY KEY,
  event_id INT REFERENCES events(id),
  user_id INT REFERENCES users(id)
);


INSERT INTO users (first_name, last_name, email, password, phone_number) VALUES ('Peter', 'Rose', 'peterrose@gmail.com', 'nicePassword', '347-555-8000');