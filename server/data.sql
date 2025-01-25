--Para crear la base de datos, ejecute el siguiente comando:
CREATE DATABASE todoapp;

--Para crear la tabla de tareas, ejecute el siguiente comando:
CREATE TABLE todos (
  id VARCHAR(255) PRIMARY KEY,
  user_email VARCHAR(255),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

--para crear la tabla de usuarios, ejecute el siguiente comando:
CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);

--para llenar la base de datos con datos de prueba, ejecute el siguiente comando:
INSERT INTO todos (id, user_email, title, progress, date)
VALUES ('0', 'arito@test.com', 'First todo', 10, '2025-01-29 13:25:45');

--Para verificar si la creación de la base de datos y las tablas fue exitosa, ejecute el siguiente comando:
SELECT * FROM todos;
