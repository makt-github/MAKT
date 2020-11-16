const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "MAKT",
});

// Registration

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO signup (name, email,password) VALUES (?,?,?)",
    [username, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Send Data Succesfully");
      }
    }
  );
});

// Login

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT email, password FROM signup WHERE email = ? AND password = ?"[
      (email, password)
    ],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          res.send(result);
          console.log(result);
        } else {
          res.send({ message: "Not Registered Yet!" });
        }
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Everything Okay......");
});
