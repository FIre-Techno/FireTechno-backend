CREATE TABLE users
(
  id INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  created_at DATETIME,
  phone VARCHAR(30),
  status INT NOT NULL,
  gcm_token VARCHAR(200) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cities
(
  id INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE destinations
(
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  status INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE airports
(
  id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  star VARCHAR(10) NOT NULL,
  review VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE classes
(
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  price VARCHAR(100) NOT NULL,
  estimate VARCHAR(100) NOT NULL,
  terminal VARCHAR(10) NOT NULL,
  gate VARCHAR(10) NOT NULL,
  id_destination INT,
  id_airport INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_destination) REFERENCES destinations(id) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (id_airport) REFERENCES airports(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE transactions
(
  id INT NOT NULL,
  unique_code VARCHAR(100) NOT NULL,
  status INT NOT NULL,
  departure_at DATETIME,
  id_class INT,
  id_user INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_class) REFERENCES classes(id) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE notifications
(
  id INT NOT NULL,
  is_open INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description LONGTEXT NOT NULL,
  created_at DATETIME,
  id_user INT,
  FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE chats
(
  id INT NOT NULL,
  created_at DATETIME,
  message LONGTEXT NOT NULL,
  id_sender INT,
  id_receiver INT,
  PRIMARY KEY (id),
  FOREIGN KEY (id_sender) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (id_receiver) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE bubble_chat
(
  id INT NOT NULL,
  total VARCHAR(100) NOT NULL,
  id_sender INT,
  id_receiver INT,
  FOREIGN KEY (id_sender) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (id_receiver) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE TABLE profiles
(
  id INT NOT NULL,
  username VARCHAR(100) NOT NULL,
  address LONGTEXT,
  postcode VARCHAR(15),
  created_at DATETIME,
  id_user INT,
  id_city INT,
  FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
  FOREIGN KEY (id_city) REFERENCES cities(id) ON DELETE SET NULL ON UPDATE CASCADE
);