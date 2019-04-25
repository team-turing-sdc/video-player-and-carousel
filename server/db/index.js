const Sequelize = require('sequelize');
const sequelize = new Sequelize('movieData', 'derrickbrandon', '',{
  host: 'localhost',
  dialect:'postgres'
});

// verify that there's a connection to the postgres database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

let getMovieData = (id, callback) => {
  let query = Movie.find({id: id});

  query.exec((err, docs) => {
    if (err) {
      console.log('error querying mongodb: ', err);
      callback(err, null);
    } else {
      console.log('mongodb query successful!');
      callback(null, docs);
    }
  })
}

module.exports.getMovieData = getMovieData;

