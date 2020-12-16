const express = require("express");
const app = express();
const port = 5000;

const logger = (req, res, next) => {
  let myDate = new Date("August 19, 1975 20:15:30"); // new Date();
  if (myDate.getDay() === 0 || myDate.getDay() === 6) {
    res.sendFile(__dirname + "/Public/work.html");
  } else if (myDate.getHours() > 8 && myDate.getHours() < 17) {
    next();
  } else {
    res.sendFile(__dirname + "/Public/work.html");
  }
};

// app.use(logger);

app.get("/", logger, (req, res) => {
  res.sendFile(__dirname + "/Public/index.html");
});

app.get("/services", logger, (req, res) => {
  res.sendFile(__dirname + "/Public/services.html");
});

app.get("/contact", logger, (req, res) => {
  res.sendFile(__dirname + "/Public/contact.html");
});

app.get("/css/style.css", (req, res) => {
  res.sendFile(__dirname + "/Public/css/style.css");
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
