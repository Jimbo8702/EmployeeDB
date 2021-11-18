DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL

);

CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT ,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT ,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    manager_id INT ,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
);
INSERT INTO department (name)
VALUES("Engineering"),
	("Construction"),
    ("Materials");

INSERT INTO role (title, salary, department_id )
VALUES ("Engineer", 100000, 1  ),
    ("General Forman", 75000, 2  ),
    ("Secrutary", 50000, 3);
    

INSERT INTO employee (first_name, last_name ,role_id)
VALUES ("john", "doe", 3),
        ("Micheal", "Giles",2),
        ("James", "Sgarella", 1);
       SELECT * FROM role;

