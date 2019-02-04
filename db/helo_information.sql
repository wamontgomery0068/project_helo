CREATE TABLE helo_information
(
  id SERIAL PRIMARY KEY,
  username VARCHAR (500),
  title VARCHAR (100) UNIQUE NOT NULL,
  profile_image VARCHAR (500) NOT NULL,
  image_url VARCHAR (500) NOT NULL,
  content VARCHAR (500)
);