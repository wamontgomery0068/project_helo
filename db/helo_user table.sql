CREATE TABLE helo_user
(
  id SERIAL PRIMARY KEY,
  information_id VARCHAR (120),
  username VARCHAR (100) UNIQUE NOT NULL,
  password VARCHAR (100) NOT NULL
);