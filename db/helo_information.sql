CREATE TABLE helo_information
(
  id SERIAL PRIMARY KEY,
  title VARCHAR (100) UNIQUE NOT NULL,
  image_url VARCHAR (500) NOT NULL,
  content VARCHAR (500)
);