const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "Jimbo8702",
    database: "employees_db",
  },
  console.log(`Connected to the classlist_db database.`)
);
//functions
function startApp() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add department",
          "add role",
          "add employee",
          "update employee role",
        ],
        name: "choice",
      },
    ])
    .then((response) => {
      switch (response.choice) {
        case "view all departments":
          allDepartments();
          break;
        case "view all roles":
          allRoles();
          break;
        case "view all employees":
          allEmployees();
          break;
        case "add department":
          addDepartment();
          break;
        case "add role":
          addRole();
          break;
        case "add employee":
          addEmployee();
          break;
        case "update employee role":
          updateRole();
          break;
      }
    });
}

//view all departments
function allDepartments() {
  db.query("SELECT * FROM department", function (err, results) {
    console.log(results);
  });
  // console.log("departments");
}
//view all roles
function allRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.log(results);
  });
  //console.log("roles");
}
//view all employees
function allEmployees() {
  db.query("SELECT * FROM employee", function (err, results) {
    console.log(results);
  });
  //console.log("employees");
}
//add department
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department you want to add",
        name: "department",
      },
    ])
    .then((response) => {
      db.query(
        `INSERT INTO department (name) VALUES ("${response.department}")`,
        function (err, results) {
          //console.log(results);
          console.log("added department");
          startApp();
        }
      );
    });
}
//add role
function addRole() {
  db.query(`SELECT * FROM department`, function (err, results) {
    console.log(results);
    const departments = results.map((department) => department.name);

    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the name of the role you want to add?",
          name: "name",
        },
        {
          type: "input",
          message: "What is the salary of the role you want to add?",
          name: "salary",
        },
        {
          type: "list",
          message: "What what department is your role under?",
          choices: departments,
          name: "department",
        },
      ]) // use results to loop through departments to see if the department entered has a matching id, insert that id in when INSERTING
      .then((response) => {
        db.query(
          `INSERT INTO role (title , salary) VALUES ("${response.name}","${response.salary}")`,
          function (err, results) {
            //console.log(results);
            console.log("added role");
            startApp();
          }
        );
      });
  });
}
//add employee
function addEmployee() {
  db.query(`SELECT * FROM role WHERE role.title`, function (err, results) {
    console.log(results);

    const roles = results.map((role) => role.title);

    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the employees first name?",
          name: "firstName",
        },
        {
          type: "input",
          message: "What is the employees last name?",
          name: "lastName",
        },
        {
          type: "list",
          message: "What is the role of the employee?",
          choices: roles,
          name: "role",
        },
        {
          type: "input",
          message: "Who manages this employee",
          name: "manager",
        },
      ])
      .then((response) => {
        db.query(
          `INSERT INTO employee (first_name , last_name) VALUES ("${response.firstName}","${response.lastName}","${response.manager}")`,
          function (err, results) {
            //console.log(results);
            console.log("added employee");
            startApp();
          }
        );
      });
  });
}

//update employee role
function updateRole() {
  console.log("role updated");
}

startApp();
