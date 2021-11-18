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
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES role(id),
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(first_name)
);
INSERT INTO department (name)
VALUES("Science");

INSERT INTO role (title, salary,)
VALUES ("lab manager", 80000),
    ("Scientist", 75000);
    

INSERT INTO employee (first_name, last_name)
VALUES ("john", "doe")
        ("Micheal", "Giles");
        ("James", "Sgarella")

