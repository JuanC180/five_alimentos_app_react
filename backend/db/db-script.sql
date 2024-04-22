CREATE DATABASE five_alimentos_db

CREATE TABLE contacto(
    id int PRIMARY KEY AUTO_INCREMENT,
    nombres varchar(80),
    correo varchar(80),
    telefono varchar(12),
    comentario varchar (200)
)