const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (require, response) => {
  let date = new Date();
  const newDate = addDays(date, 100);
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

module.exports = app;
