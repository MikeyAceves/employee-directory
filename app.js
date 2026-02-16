import express from "express";

const app = express();
export default app;
import { getEmployees, getEmployee, randomEmployee } from "./db/employees.js";

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

app.get("/employees/random", (req, res) => {
  const employee = randomEmployee();
  res.send(employee);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  const employee = getEmployee(+id);

  if (!employee) {
    return res.status(404).send("That employee doesn't exist.");
  }

  res.send(employee);
});
