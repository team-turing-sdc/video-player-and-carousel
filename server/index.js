const express = require('express');
const app = (express());
const PORT = 3333;
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/index');

app.use(bodyParser());

app.use(cors());

app.use((req, res, next) => {
  console.log(`serving a ${req.method} request at ${new Date} to url ${req.url}`)
  next();
})

app.get('/associatedVideos/:id', (req, res) => {
  let id = req.params.id;

  db.getMovieData(id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('db query successful! results: ', results);
      res.statusCode = 200;
      res.json(results);
    }
  });
});

app.post('/associatedVideos/:id', (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let associatedVideoTitle1 = req.body.associatedVideoTitle1;
  let associatedVideoTitle2 = req.body.associatedVideoTitle2;
  let associatedVideoTitle3 = req.body.associatedVideoTitle3;
  let associatedVideoTitle4 = req.body.associatedVideoTitle4;
  let associatedVideoTitle5 = req.body.associatedVideoTitle5;
  let associatedVideoLink1 = req.body.associatedVideoLink1;
  let associatedVideoLink2 = req.body.associatedVideoLink2;
  let associatedVideoLink3 = req.body.associatedVideoLink3;
  let associatedVideoLink4 = req.body.associatedVideoLink4;
  let associatedVideoLink5 = req.body.associatedVideoLink5;

  db.addMovie(id, name, associatedVideoTitle1, associatedVideoTitle2, associatedVideoTitle3,associatedVideoTitle4,associatedVideoTitle5, associatedVideoLink1, associatedVideoLink2, associatedVideoLink3, associatedVideoLink4,associatedVideoLink5, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('db post successful! results: ', results);
      res.statusCode = 200;
      res.json(results);
    }
  });
});

app.put('/associatedVideos/:id', (req, res) => {
  let id = req.params.id;
  let column = req.body.column;
  let value = req.body.value;

  db.updateMovie(id, column, value, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('db update successful! results: ', results);
      res.statusCode = 200;
      res.json(results);
    }
  });
});

app.delete('/associatedVideos/:id', (req, res) => {
  let id = req.params.id;
  db.deleteMovie(id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('db deletion successful! results: ', results);
      res.statusCode = 200;
      res.json(results);
    }
  })
});

app.use('/', express.static(__dirname + '/../public/'));
app.use('/client/dist/bundle.js', (express.static(__dirname + '/../client/dist/bundle.js')))
app.use('/*', express.static(__dirname + '/../public/'));

app.listen(PORT, () => {
  console.log(`Server active! Listening on port ${PORT}.`)
})