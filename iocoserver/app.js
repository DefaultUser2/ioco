const http = require('http');
var mysql = require('mysql');
var express = require('express');
var app = express();

const hostname = '128.199.39.177';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

var con = mysql.createConnection({
  host: "128.199.39.177",
  user: "root",
  password: "root_password",
  database: "company"
});




app.listen(port, () => console.log(`Server listening on port ${port}!`))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://128.199.39.177:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/listEmployee', function (req, res) {
  console.log("start get employee");
  console.log(req.query.empid);
    con.query("SELECT * FROM company.employee as E, company.person as P where E.PersonId = P.PersonId and E.EmployeeId ="+req.query.empid,
    function (err, result, fields) {
      console.log(result);
      //console.log(fields);
      res.send(result);
  });
})

app.get('/listAll', function (req, res) {
  console.log("start get");
    con.query("SELECT * FROM company.employee as E, company.person as P where E.PersonId = P.PersonId",
    function (err, result, fields) {
      console.log(result);
      //console.log(fields);
      res.send(result);
  });
})

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
