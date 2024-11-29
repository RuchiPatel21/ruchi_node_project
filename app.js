const express = require('express')
const app = express()
// const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn()

const statusMonitor = require('express-status-monitor')();
app.use(statusMonitor);
// app.get('/status', ensureLoggedIn, statusMonitor.pageRoute)

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


require ("./router") (app);

// app.get('/', function (req, res) {
//   res.send('Hello World')
//   console.log("req.params.id")
// })

// app.get('/employee/:id', function (req, res) {
//   res.send(req.params.id)
//   console.log(req.params.id)
// })

// app.post('/employee', function (req, res) {
//   let input = req.query
//   console.log(input)
//   res.send(input)
// })

app.listen(9998, function(){
    console.log("Server is running on port 9998")
})