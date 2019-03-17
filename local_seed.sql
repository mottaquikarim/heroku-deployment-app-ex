DROP DATABASE if exists petpedia;
CREATE DATABASE petpedia;

\c petpedia

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phonenumber INT NOT NULL
);
 


