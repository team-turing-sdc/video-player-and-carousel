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

app.get('/associatedVideos', (req, res) => {
  let id = req.query.movieID;

  db.getMovieData(id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('db query successful! results: ', results);
      res.statusCode = 200;
      res.json(results);
    }
  })
});

app.post('/associatedVideos', (req, res) => {
  res.end("this is where you'll come to add something!");
});

app.put('/associatedVideos', (req, res) => {
  res.end("this is where you'll come to edit something");
});

app.delete('/associatedVideos', (req, res) => {
  res.end("this is where you'll come to delete something!")
});

app.use('/', express.static(__dirname + '/../public/'));
app.use('/client/dist/bundle.js', (express.static(__dirname + '/../client/dist/bundle.js')))
app.use('/*', express.static(__dirname + '/../public/'));

app.listen(PORT, () => {
  console.log(`Server active! Listening on port ${PORT}.`)
})