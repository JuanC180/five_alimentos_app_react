CREATE DATABASE five_alimentos_db

CREATE TABLE contacto(
    id int PRIMARY KEY AUTO_INCREMENT,
    nombres varchar(80) NOT NULL,
    correo varchar(80) NOT NULL,
    telefono varchar(10) NOT NULL,
    comentario varchar (200)
)

CREATE TABLE producto (
    id int PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(80) NOT NULL,
    descripcion varchar(200) NOT NULL,
    urlImagen text NOT NULL,
    precio decimal NOT NULL
)

INSERT INTO productos VALUES ("1","Television","Tv 20 pulgadas", "https://png.pngtree.com/png-clipart/20220220/original/pngtree-television-logo-with-antena-png-image_7271918.png", "12000")