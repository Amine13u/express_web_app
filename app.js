const express = require("express");
const app = express();
const port = 5000;

logger = (req, res, next) => {
  let myDate = new Date("December 21, 2020 10:15:30");
  if (myDate.getDay() === 0 || myDate.getDay() === 6) {
    res.sendFile(__dirname + "/Public/work.html");
  } else if (myDate.getHours() > 8 && myDate.getHours() < 17) {
    next();
  } else {
    res.sendFile(__dirname + "/Public/work.html");
  }
};

app.use(logger);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/Public/services.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Public/contact.html");
});

app.get("/css/style.css", (req, res) => {
  res.sendFile(__dirname + "/Public/css/style.css");
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
