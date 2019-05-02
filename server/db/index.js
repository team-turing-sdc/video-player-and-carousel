const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('movieData', 'other', '24uhh%!?',{
  host: '18.217.213.55',
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

class Movie extends Model {};
Movie.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  associatedVideoTitle1: {
    type: Sequelize.STRING
  },
  associatedVideoLink1: {
    type: Sequelize.STRING
  },
  associatedVideoTitle2: {
    type: Sequelize.STRING
  },
  associatedVideoLink2: {
    type: Sequelize.STRING
  },
  associatedVideoTitle3: {
    type: Sequelize.STRING
  },
  associatedVideoLink3: {
    type: Sequelize.STRING
  },
  associatedVideoTitle4: {
    type: Sequelize.STRING
  },
  associatedVideoLink4: {
    type: Sequelize.STRING
  },
  associatedVideoTitle5: {
    type: Sequelize.STRING
  },
  associatedVideoLink5: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});

let getMovieData = (id, callback) => {
  let query = `SELECT * FROM moviedata WHERE id=${id}`;
  sequelize.query(query).then(movie => {
    callback(null, movie);
  }).catch(err => err ? callback(err) : callback(null));
};

let deleteMovie = (id, callback) => {
  let query = `DELETE FROM moviedata WHERE id=${id}`;

  sequelize.query(query).then(movie => {
    callback(null, movie);
  }).catch(err => err ? callback(err) : callback(null));
}

let addMovie = (id, name, associatedVideoTitle1, associatedVideoTitle2, associatedVideoTitle3,associatedVideoTitle4,associatedVideoTitle5, associatedVideoLink1, associatedVideoLink2, associatedVideoLink3, associatedVideoLink4,associatedVideoLink5, callback) => {
  let query = `INSERT INTO moviedata (id, name, associatedVideoTitle1, associatedVideoLink1, associatedVideoTitle2, associatedVideoLink2, associatedVideoTitle3, associatedVideoLink3, associatedVideoTitle4, associatedVideoLink4, associatedVideoTitle5, associatedVideoLink5) VALUES(${id}, '${name}', '${associatedVideoTitle1}', '${associatedVideoLink1}', '${associatedVideoTitle2}', '${associatedVideoLink2}', '${associatedVideoTitle3}', '${associatedVideoLink3}', '${associatedVideoTitle4}', '${associatedVideoLink4}', '${associatedVideoTitle5}', '${associatedVideoLink5}')`;

  sequelize.query(query).then(movie => {
    callback(null, movie);
  }).catch(err => err ? callback(err) : callback(null));
}

let updateMovie = (id, column, value, callback) => {
  let query = `UPDATE moviedata SET ${column} = '${value}' WHERE id = ${id}`;

  sequelize.query(query).then(movie => {
    callback(null, movie);
  }).catch(err => err ? callback(err) : callback(null));
}

module.exports = {
  getMovieData: getMovieData,
  deleteMovie: deleteMovie,
  addMovie: addMovie,
  updateMovie: updateMovie
}

