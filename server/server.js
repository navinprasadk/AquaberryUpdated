// const express = require("express"),
//   app = express(),
//   server = require("http").Server(app);

// server.listen(5000, function() {
//   console.log("server started on  5000");
// });
// 'use strict';
// const express = require('express')
//     , bodyParser = require('body-parser')
//     , apiai = require('apiai')
//     , app = express()
//     , dialogflowApp = apiai("cfbe8610671d44d994e4d939ded5fc37")
//     , server = require('http').Server(app);

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// app.use(express.static('./../'));

// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());

// app.get('/test', function (req, res) {
//     console.log('Recieved Request');
//     res.send('Server Running Healthy!')
// })

// app.get('/callDialogflow/:utterance/:counter', function (req, res) {
//     console.log('Query received: ', req.params.utterance);
//     console.log('Counter: ', req.params.counter);
//     var counter = req.params.counter
//         , query = req.params.utterance.toUpperCase();
//     // console.log('Sending request to dialogflow!');
//     // var request = dialogflowApp.textRequest(req.params.utterance, {
//     //     sessionId: '<unique session id>'
//     // });
//     // request.on('response', function(response) {
//     //     console.log(response.result.fulfillment.speech);
//     //     res.send(response.result.fulfillment.speech)
//     // });
//     // request.on('error', function(error) {
//     //     console.log(error);
//     // });
//     // request.end();
//     // res.set('Content-Type', 'text/plain');
//     if (counter == 1) {
//         res.send('Hi, how can I help you?')
//     }
//     else if (counter == 2) {
//         res.send('Sure, I can do now. Can you confirm the order number?')
//     }
//     else if (counter == 3) {
//         res.send('Please confirm the new date and time.')
//     }
//     else if (counter == 4) {
//         res.send('Sure, done.')
//     }
//     else if (counter == 5) {
//         res.send('Always a pleasure.')
//     }
//     else {
//         res.send('This query is not in my database but I am always learning.')
//     }
// })

// server.listen(8080, function () {
//     console.log("Server up and listening on port 8080");
// });
("use strict");
const express = require("express"),
  bodyParser = require("body-parser"),
  apiai = require("apiai"),
  app = express(),
  PORT = process.env.PORT || 8080,
  dialogflowApp = apiai("cfbe8610671d44d994e4d939ded5fc37"),
  server = require("http").Server(app);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static("./../"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.get("/test", function(req, res) {
  // console.log("Recieved Request");
  res.send("Server Running Healthy!");
});

app.get("/callDialogflow/:utterance/:counter", function(req, res) {
  // console.log("Query received: ", req.params.utterance);
  // console.log("Counter: ", req.params.counter);
  var counter = req.params.counter,
    query = req.params.utterance.toUpperCase();
  if (counter == 1) {
    res.send("Hi, how can I help you?");
  } else if (counter == 2) {
    res.send("Sure, I can do now. Can you confirm the order number?");
  } else if (counter == 3) {
    res.send("Please confirm the new date and time.");
  } else if (counter == 4) {
    res.send("Sure, done.");
  } else if (counter == 5) {
    res.send("Always a pleasure.");
  } else {
    res.send("This query is not in my database but I am always learning.");
  }
});

server.listen(PORT, (err, res) => {
  if (err) {
    console.log("err in server - > ", err);
  } else {
    console.log("Server up and listening on port ", PORT);
  }
});
